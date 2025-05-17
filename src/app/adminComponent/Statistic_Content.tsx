import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { toast } from 'react-toastify'
import { getDailyStatsAPI, getMonthlyStatsAPI, getYearlyStatsAPI } from '../api/index'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const Statistic_Content = () => {
  const [filter, setFilter] = useState('daily')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [year, setYear] = useState(new Date().getFullYear().toString())
  const [stats, setStats] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchStats = async () => {
    setLoading(true)
    try {
      let response
      if (filter === 'daily') {
        if (!startDate || !endDate) {
          toast.error('Vui lòng chọn khoảng thời gian')
          setLoading(false)
          return
        }
        response = await getDailyStatsAPI(startDate, endDate)
      } else if (filter === 'monthly') {
        if (!year || isNaN(year)) {
          toast.error('Vui lòng nhập năm hợp lệ')
          setLoading(false)
          return
        }
        response = await getMonthlyStatsAPI(year)
      } else {
        if (!year || isNaN(year)) {
          toast.error('Vui lòng nhập năm hợp lệ')
          setLoading(false)
          return
        }
        response = await getYearlyStatsAPI(year, year)
      }
      setStats(response.stats || [])
    } catch (error) {
      toast.error(error.message || 'Không thể lấy dữ liệu thống kê')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (filter === 'daily' && startDate && endDate) {
      fetchStats()
    } else if (filter !== 'daily' && year) {
      fetchStats()
    }
  }, [filter, startDate, endDate, year])

  const chartData = {
    labels: stats.map(item => item.date || item.month || item.year),
    datasets: [
      {
        label: 'Doanh thu (VND)',
        data: stats.map(item => item.totalRevenue),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Số đơn hàng',
        data: stats.map(item => item.orderCount),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: 'Số sản phẩm',
        data: stats.map(item => item.itemCount),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: `Thống kê bán hàng - ${filter === 'daily' ? 'Theo ngày' : filter === 'monthly' ? 'Theo tháng' : 'Theo năm'}`
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Giá trị' }
      },
      x: {
        title: { display: true, text: filter === 'daily' ? 'Ngày' : filter === 'monthly' ? 'Tháng' : 'Năm' }
      }
    }
  }

  return (
    <div className="statistic-content">
      <div className="filter-section">
        <div className="form-group">
          <label>Loại thống kê:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="daily">Theo ngày</option>
            <option value="monthly">Theo tháng</option>
            <option value="yearly">Theo năm</option>
          </select>
        </div>
        {filter === 'daily' ? (
          <div className="date-range">
            <div className="form-group">
              <label>Ngày bắt đầu:</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Ngày kết thúc:</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        ) : (
          <div className="form-group">
            <label>Năm:</label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Nhập năm (VD: 2025)"
            />
          </div>
        )}  
      </div>

      {loading ? (
        <div>Đang tải dữ liệu...</div>
      ) : stats.length === 0 ? (
        <div>Không có dữ liệu thống kê</div>
      ) : (
        <>
          <div className="chart-container">
            <Bar data={chartData} options={chartOptions} />
          </div>
          <div className="stats-table">
            <h3>Chi tiết thống kê</h3>
            <table>
              <thead>
                <tr>
                  <th>{filter === 'daily' ? 'Ngày' : filter === 'monthly' ? 'Tháng' : 'Năm'}</th>
                  <th>Doanh thu (VND)</th>
                  <th>Số đơn hàng</th>
                  <th>Số sản phẩm</th>
                </tr>
              </thead>
              <tbody>
                {stats.map((item, index) => (
                  <tr key={index}>
                    <td>{item.date || item.month || item.year}</td>
                    <td>{item.totalRevenue.toLocaleString('vi-VN')}</td>
                    <td>{item.orderCount}</td>
                    <td>{item.itemCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  )
}