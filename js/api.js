const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "ae19e15e6emsh56e8ac13d5b77fcp154b51jsne149e7537c18",
    "x-rapidapi-host": "shazam.p.rapidapi.com",
  },
};
export class API {
  // Popular şarkıları alan fonksiyon
  async getPopular() {
    // const url = "https://shazam.p.rapidapi.com/search?term=Neffex";

    //  Apı'a istek at
    // const response = await fetch(url, options);

    //  Apı'dan gelen veriyi js nesnesine çevir
    // const data = await response.json();

    // const formattedData = data.tracks.hits.map((item) => item.track);

    // return formattedData;

    const data = await this.searchMusic("lana del rey");

    const data1 = await this.searchMusic("katy perry");
    const data2 = await this.searchMusic("eminem");

    return [...data, ...data1, ...data2];
  }

  // aratılan şarkı verisini alan fonksiyon

  async searchMusic(query) {
    const url = `https://shazam.p.rapidapi.com/search?term=${query}`;

    // aratılan değer ile apiye istek at

    const res = await fetch(url, options);

    //gelen veriyi js nesnesine çevir

    const data = await res.json();

    // veriyi projeye uygun şekilde dönüştür

    const formattedData = data.tracks.hits.map((item) => item.track);
    return formattedData;
  }
}
