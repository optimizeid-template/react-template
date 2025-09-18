interface Window {
  templateConfig: {
    title?: string
    companyName?: string
    sections: Array<{
      sectionType: string
      menuName?: string
      banner?: {
        title: string
        caption: string
        image: string
      }
      feature?: {
        features: any[]
        image: string
        background: string
      }
      logoSection?: {
        background: string
        title: string
        caption: string
        logos: string[]
      }
      dataSection?: {
        background: string
        title: string
        caption: string
        datas: Array<{
          name: string
          [key: string]: any
        }>
      }
      cardSection?: {
        title: string
        cards: any[]
      }
    }>
  }
}
