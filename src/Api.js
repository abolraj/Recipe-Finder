import $ from 'jquery'
export default class RecipeApi {
  static apiUrl = 'https://www.themealdb.com/api/json/v1/1/'
  static search(done, data = {}, fail = null) {
    this.request('search.php', done, data, fail)
  }

  static find(done, data = {}, fail = null) {
    this.request('lookup.php', done, data, fail)
  }

  static request(methodUrl, done, data = {}, fail = null) {
    $.ajax({
      url: RecipeApi.apiUrl + methodUrl,
      dataType: "json",
      method: "GET",
      data: data,
    })
    .done(data => {
      done(data)
      console.log('Success:', data)
    })
    .fail(err => {
      fail && fail(err)
      console.log('Error:', err)
    })
  }
}