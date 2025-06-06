'use client'

import { useState } from 'react'
import styles from "@/app/page.module.css"
import clsx from "clsx"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { sendMessageAPI } from '@/app/api/index'

export default function Section_Sign() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!email) {
      toast.error('Vui lòng nhập email')
      return
    }
    setLoading(true)
    try {
      await sendMessageAPI({
        email,
        content: 'Người dùng đã đăng ký email',
        type: 'subscription'
      })
      toast.success('Đăng ký email thành công!')
      setEmail('')
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message || 'Không thể đăng ký email')
      } else {
        toast.error('Không thể đăng ký email')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={styles.section_sign}>
      <section className={styles.section_malchip}>
        <div className={styles.container}>
          <div className={styles.sign_content}>
            <div className={styles.sign_title}>
              <h2>Đăng ký email để nhận được ưu đãi mới nhất của chúng tôi</h2>
              <p>Rất hân hạnh được phục vụ bạn. Chúc bạn có trải nghiệm tuyệt vời về dịch vụ của Stationery</p>
            </div>
            <div className={styles.mail_footer}>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Nhập email của bạn tại đây ..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className={clsx(styles.btn_mail, styles.subcribe)}>
                  <button type="submit" disabled={loading}>
                    {loading ? 'Đang đăng ký...' : 'Đăng ký ngay'}
                  </button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}