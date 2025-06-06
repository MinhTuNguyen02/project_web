/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { toast } from 'react-toastify'
import { getDailyStatsAPI, getMonthlyStatsAPI, getTopProductsAPI } from '@/app/api/index'
import { Stat, TopProduct } from '@/app/types'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const Statistic_Content = () => {
  const [filter, setFilter] = useState<'daily' | 'monthly' | 'yearly'>('daily')
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [year, setYear] = useState<string>(new Date().getFullYear().toString())
  const [month, setMonth] = useState<string>('1')
  const [stats, setStats] = useState<Stat[]>([])
  const [topProducts, setTopProducts] = useState<TopProduct[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [displayMetric, setDisplayMetric] = useState<'revenue' | 'orders' | 'items'>('revenue')
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [totalOrder, setTotalOrder] = useState<number>(0)
  const [totalProd, setTotalProd] = useState<number>(0)

  const fetchStats = async () => {
    setLoading(true)
    try {
      let statsResponse, topProductsResponse
      if (filter === 'daily') {
        if (!startDate || !endDate) {
          toast.error('Vui lòng chọn khoảng thời gian')
          setLoading(false)
          return
        }
        statsResponse = await getDailyStatsAPI(startDate, endDate)
        topProductsResponse = await getTopProductsAPI({ startDate, endDate })
      } else if (filter === 'monthly') {
        if (!year || isNaN(parseInt(year)) || !month || isNaN(parseInt(month))) {
          toast.error('Vui lòng nhập năm và tháng hợp lệ')
          setLoading(false)
          return
        }
        statsResponse = await getDailyStatsAPI(
          `${year}-${month.padStart(2, '0')}-01`,
          `${year}-${month.padStart(2, '0')}-${new Date(parseInt(year), parseInt(month), 0).getDate()}`
        )
        topProductsResponse = await getTopProductsAPI({ year, month })
      } else {
        if (!year || isNaN(parseInt(year))) {
          toast.error('Vui lòng nhập năm hợp lệ')
          setLoading(false)
          return
        }
        statsResponse = await getMonthlyStatsAPI(year)
        topProductsResponse = await getTopProductsAPI({ year })
      }
      setStats(statsResponse.stats || [])
      setTopProducts(topProductsResponse.topProducts || [])
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message || 'Không thể lấy dữ liệu thống kê')
      } else {
        toast.error('Không thể lấy dữ liệu thống kê')
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const calculateTotals = () => {
      const price = stats.reduce((sum, item) => sum + item.totalRevenue, 0)
      const orders = stats.reduce((sum, item) => sum + item.orderCount, 0)
      const products = stats.reduce((sum, item) => sum + item.itemCount, 0)
      setTotalPrice(price)
      setTotalOrder(orders)
      setTotalProd(products)
    }

    if (stats.length > 0) {
      calculateTotals()
    } else {
      setTotalPrice(0)
      setTotalOrder(0)
      setTotalProd(0)
    }
  }, [stats])

  useEffect(() => {
    if (filter === 'daily' && startDate && endDate) {
      fetchStats()
    } else if (filter === 'monthly' && year && month) {
      fetchStats()
    } else if (filter === 'yearly' && year) {
      fetchStats()
    }
  }, [filter, startDate, endDate, year, month])

  const chartData = {
    labels: stats.map(item => item.date || item.month || item.year),
    datasets: [
      {
        label: displayMetric === 'revenue' ? 'Doanh thu (VND)' : displayMetric === 'orders' ? 'Số đơn hàng' : 'Số sản phẩm',
        data: stats.map(item =>
          displayMetric === 'revenue' ? item.totalRevenue : displayMetric === 'orders' ? item.orderCount : item.itemCount
        ),
        backgroundColor:
          displayMetric === 'revenue'
            ? 'rgba(75, 192, 192, 0.5)'
            : displayMetric === 'orders'
            ? 'rgba(255, 99, 132, 0.5)'
            : 'rgba(54, 162, 235, 0.5)',
        borderColor:
          displayMetric === 'revenue'
            ? 'rgba(75, 192, 192, 1)'
            : displayMetric === 'orders'
            ? 'rgba(255, 99, 132, 1)'
            : 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: {
        display: true,
        text: `Thống kê bán hàng - ${filter === 'daily' ? 'Theo ngày' : filter === 'monthly' ? 'Theo ngày trong tháng' : 'Theo tháng trong năm'}`
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: displayMetric === 'revenue' ? 'Doanh thu (VND)' : 'Số lượng' }
      },
      x: {
        title: { display: true, text: filter === 'daily' || filter === 'monthly' ? 'Ngày' : 'Tháng' }
      }
    }
  }

  return (
    <div>
      <div className="filter-section-admin">
        <div className="form-group">
          <label>Loại thống kê:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value as 'daily' | 'monthly' | 'yearly')}>
            <option value="daily">Theo ngày</option>
            <option value="monthly">Theo tháng</option>
            <option value="yearly">Theo năm</option>
          </select>
        </div>
        <div className="form-group">
          <label>Hiển thị:</label>
          <select value={displayMetric} onChange={(e) => setDisplayMetric(e.target.value as 'revenue' | 'orders' | 'items')}>
            <option value="revenue">Doanh thu</option>
            <option value="orders">Số đơn hàng</option>
            <option value="items">Số sản phẩm</option>
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
        ) : filter === 'monthly' ? (
          <div className="month-year">
            <div className="form-group">
              <label>Tháng:</label>
              <select value={month} onChange={(e) => setMonth(e.target.value)}>
                {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Năm:</label>
              <input
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="Nhập năm (VD: 2025)"
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
              style={{width:'40%', position:'absolute',right:'30%'}}
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
            <h2>Chi tiết thống kê</h2>
            <table>
              <thead>
                <tr>
                  <th>{filter === 'daily' || filter === 'monthly' ? 'Ngày' : 'Tháng'}</th>
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
                <tr>
                  <td><strong>Tổng:</strong></td>
                  <td><strong>{totalPrice.toLocaleString('vi-VN')}</strong></td>
                  <td><strong>{totalOrder}</strong></td>
                  <td><strong>{totalProd}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="top-products-table">
            <h2>Top sản phẩm bán chạy</h2>
            {topProducts.length === 0 ? (
              <div>Không có dữ liệu sản phẩm</div>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Doanh thu (VND)</th>
                  </tr>
                </thead>
                <tbody>
                  {topProducts.map((product, index) => (
                    <tr key={index}>
                      <td><img src={product.img[0]} alt={product.productName} width={60} height={60} /></td>
                      <td style={{textAlign:'left'}}>{product.productName}</td>
                      <td>{product.totalQuantity}</td>
                      <td>{product.totalRevenue.toLocaleString('vi-VN')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      )}
    </div>
  )
}
