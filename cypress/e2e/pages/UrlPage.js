class UrlPage {
  Pages = {
    basePage: 'https://stg.landing.peninsula.co',
    aboutPage: 'https://stg.landing.peninsula.co/about', 
  }

  get basePage() {
    return this.Pages.basePage;
  }
}

export default new UrlPage()