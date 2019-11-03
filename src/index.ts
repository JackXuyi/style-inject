import { Option } from './type'

export default function(css: string, { insertAt }: Option = {}) {
  if (!css || typeof document === 'undefined') {
    return
  }

  let head = document.head || document.getElementsByTagName('head')[0]
  // insertAt 为函数时且返回值不为空时使用
  if (typeof insertAt === 'function' && insertAt()) {
    head = insertAt()
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
}
