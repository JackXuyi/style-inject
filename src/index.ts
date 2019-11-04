import { Option } from './type'

const TIMEOUT = 0

export default function(css: string, { insertAt, type }: Option = {}) {
  setTimeout(() => {
    if (!css || typeof document === 'undefined') {
      return
    }

    const htmlHead = document.head || document.getElementsByTagName('head')[0]

    let head: any = htmlHead

    // insertAt 为函数时且返回值不为空时使用
    switch (type) {
      case 'CLASS': {
        // class name
        head = document.getElementsByClassName(insertAt || '')[0]
        break
      }
      case 'ID': {
        // id
        head = document.getElementById(insertAt || '')
        break
      }
      case 'TAG': {
        // tag 如 div 等
        head = document.getElementsByTagName(insertAt || '')[0]
        break
      }
      case 'GLOABL': {
        // window 下的全局对象
        head = (window as any)[`${insertAt || ''}`]

        break
      }
      default: {
        head = htmlHead
        break
      }
    }

    // 判断 head 是否合法
    if (!head || !head.insertBefore || !head.appendChild) {
      return
    }

    // head 存在
    const style: HTMLStyleElement = document.createElement('style')
    style.type = 'text/css'

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild)
      } else {
        head.appendChild(style)
      }
    } else {
      head.appendChild(style)
    }

    if (style.innerHTML) {
      style.innerHTML = css
    } else {
      style.appendChild(document.createTextNode(css))
    }
  }, TIMEOUT)
}
