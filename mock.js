// Fetch and inject mock data into window object
fetch('./schema/mock.json')
  .then(response => response.json())
  .then((data) => {
    window.templateConfig = data
    // Dispatch a custom event to notify that template config is loaded
    window.dispatchEvent(new CustomEvent('templateConfigLoaded', { detail: data }))
  })
  .catch((error) => {
    console.error('Error loading template config:', error)
    // Fallback empty config
    window.templateConfig = { sections: [], title: 'Default Title', companyName: 'Company' }
  })
