const {
  renderData,
  handleSortAndFilter,
  fecthCountries,
  sortLogic,
  filterByRegionLogic,
} = require("../index");
const mockData = require("./data.json");
const dataAsc = require("./dataAsc.json");
const dataDesc = require("./dataDesc.json");
const dataAsia = require("./dataAsia.json");
const dataRegionAsc = require("./dataRegionAsc.json");
const dataRegionDesc = require("./dataRegionDesc.json");

const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../../index.html"),
  "utf8"
);
let countriesData = [
  {
    name: {
      common: "Venezuela",
      official: "Bolivarian Republic of Venezuela",
      nativeName: {
        spa: {
          official: "República Bolivariana de Venezuela",
          common: "Venezuela",
        },
      },
    },
    tld: [".ve"],
    cca2: "VE",
    ccn3: "862",
    cca3: "VEN",
    cioc: "VEN",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: {
      VES: {
        name: "Venezuelan bolívar soberano",
        symbol: "Bs.S.",
      },
    },
    idd: {
      root: "+5",
      suffixes: ["8"],
    },
    capital: ["Caracas"],
    altSpellings: [
      "VE",
      "Bolivarian Republic of Venezuela",
      "Venezuela, Bolivarian Republic of",
      "República Bolivariana de Venezuela",
    ],
    region: "Americas",
    subregion: "South America",
    languages: {
      spa: "Spanish",
    },

    latlng: [8, -66],
    landlocked: false,
    borders: ["BRA", "COL", "GUY"],
    area: 916445,
    demonyms: {
      eng: {
        f: "Venezuelan",
        m: "Venezuelan",
      },
      fra: {
        f: "Vénézuélienne",
        m: "Vénézuélien",
      },
    },
    flag: "🇻🇪",
    maps: {
      googleMaps: "https://goo.gl/maps/KLCwDN8sec7z2kse9",
      openStreetMaps: "https://www.openstreetmap.org/relation/272644",
    },
    population: 28435943,
    gini: {
      2006: 44.8,
    },
    fifa: "VEN",
    car: {
      signs: ["YV"],
      side: "right",
    },
    timezones: ["UTC-04:00"],
    continents: ["South America"],
    flags: {
      png: "https://flagcdn.com/w320/ve.png",
      svg: "https://flagcdn.com/ve.svg",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/ve.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/ve.svg",
    },
    startOfWeek: "monday",
    capitalInfo: {
      latlng: [10.48, -66.87],
    },
    postalCode: {
      format: "####",
      regex: "^(\\d{4})$",
    },
  },
];
global.score = 1;

jest.dontMock("fs");

describe("fetch country and population", function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });
  afterEach(() => {
    // restore the original func after test
    jest.resetModules();
    fetch.resetMocks();
  });

  it("basic drop downs exists", function () {
    let sortDropdown = document.getElementById("sort_population");
    expect(sortDropdown).toBeTruthy();
    expect(sortDropdown.options.length).toBe(3);
    let filterRegion = document.getElementById("filter_region");
    expect(filterRegion).toBeTruthy();
    expect(filterRegion.options.length).toBe(6);
    global.score += 1;
  });

  it("renderData should fetch the results", function (done) {
    fetch.mockResponse(JSON.stringify(countriesData));
    fecthCountries()
      .then((res) => {
        expect(res).toEqual([
          {
            name: {
              common: "Venezuela",
              official: "Bolivarian Republic of Venezuela",
              nativeName: {
                spa: {
                  official: "República Bolivariana de Venezuela",
                  common: "Venezuela",
                },
              },
            },
            tld: [".ve"],
            cca2: "VE",
            ccn3: "862",
            cca3: "VEN",
            cioc: "VEN",
            independent: true,
            status: "officially-assigned",
            unMember: true,
            currencies: {
              VES: {
                name: "Venezuelan bolívar soberano",
                symbol: "Bs.S.",
              },
            },
            idd: {
              root: "+5",
              suffixes: ["8"],
            },
            capital: ["Caracas"],
            altSpellings: [
              "VE",
              "Bolivarian Republic of Venezuela",
              "Venezuela, Bolivarian Republic of",
              "República Bolivariana de Venezuela",
            ],
            region: "Americas",
            subregion: "South America",
            languages: {
              spa: "Spanish",
            },

            latlng: [8, -66],
            landlocked: false,
            borders: ["BRA", "COL", "GUY"],
            area: 916445,
            demonyms: {
              eng: {
                f: "Venezuelan",
                m: "Venezuelan",
              },
              fra: {
                f: "Vénézuélienne",
                m: "Vénézuélien",
              },
            },
            flag: "🇻🇪",
            maps: {
              googleMaps: "https://goo.gl/maps/KLCwDN8sec7z2kse9",
              openStreetMaps: "https://www.openstreetmap.org/relation/272644",
            },
            population: 28435943,
            gini: {
              2006: 44.8,
            },
            fifa: "VEN",
            car: {
              signs: ["YV"],
              side: "right",
            },
            timezones: ["UTC-04:00"],
            continents: ["South America"],
            flags: {
              png: "https://flagcdn.com/w320/ve.png",
              svg: "https://flagcdn.com/ve.svg",
            },
            coatOfArms: {
              png: "https://mainfacts.com/media/images/coats_of_arms/ve.png",
              svg: "https://mainfacts.com/media/images/coats_of_arms/ve.svg",
            },
            startOfWeek: "monday",
            capitalInfo: {
              latlng: [10.48, -66.87],
            },
            postalCode: {
              format: "####",
              regex: "^(\\d{4})$",
            },
          },
        ]);
        expect(res).toHaveProperty("name", countriesData.name);
        expect(res).toHaveProperty("capital", countriesData.capital);
        expect(res).toHaveProperty("region", countriesData.region);

        expect(fetch).toBeCalled();
        expect(fetch).toBeCalledWith("https://restcountries.com/v3.1/all");
        global.score += 2;
        done();
      })
      .catch((err) => done(err));
  });
  it("should display counrty cards on load", () => {
    renderData(mockData);
    let container = document.getElementById("all_countries");
    expect(container.childNodes.length).toBe(5);
    let children = container.childNodes;
    Array.from(children, (ele, index) => {
      expect(ele.textContent).toContain(mockData[index].name.common);
      expect(ele.textContent).toContain(mockData[index].population);
      expect(ele.textContent).toContain(mockData[index].region);
      expect(ele.textContent).toContain(mockData[index].capital);
      expect(ele.innerHTML).toContain(mockData[index].flags.png);
    });
    global.score += 1;
  });
  it("sortByPopulation in descending  order should work", () => {
    handleSortAndFilter();
    document.getElementById("filter_region").value = "all";
    document.getElementById("sort_population").value = "desc";
    let sortedData = sortLogic("desc", [...mockData]);
    renderData(sortedData);
    let container = document.getElementById("all_countries");
    expect(container.childNodes.length).toBe(5);
    let children = container.childNodes;
    Array.from(children, (ele, index) => {
      expect(ele.textContent).toContain(dataDesc[index].name.common);
      expect(ele.textContent).toContain(dataDesc[index].population);
      expect(ele.textContent).toContain(dataDesc[index].region);
      expect(ele.textContent).toContain(dataDesc[index].capital);
      expect(ele.innerHTML).toContain(dataDesc[index].flags.png);
    });
    global.score += 1;
  });
  it("sortByPopulation in ascending order should work", () => {
    handleSortAndFilter();
    document.getElementById("filter_region").value = "all";
    document.getElementById("sort_population").value = "asc";
    let sortedData = sortLogic("asc", [...mockData]);
    renderData(sortedData);
    let container = document.getElementById("all_countries");
    expect(container.childNodes.length).toBe(5);
    let children = container.childNodes;
    Array.from(children, (ele, index) => {
      expect(ele.textContent).toContain(dataAsc[index].name.common);
      expect(ele.textContent).toContain(dataAsc[index].population);
      expect(ele.textContent).toContain(dataAsc[index].region);
      expect(ele.textContent).toContain(dataAsc[index].capital);
      expect(ele.innerHTML).toContain(dataAsc[index].flags.png);
    });
    global.score += 1;
  });
  it("filter by region should work", () => {
    handleSortAndFilter();
    document.getElementById("filter_region").value = "Asia";
    let newData = filterByRegionLogic([...mockData], "Asia");
    let sortedData = sortLogic("", newData);
    renderData(sortedData);
    let container = document.getElementById("all_countries");
    expect(container.childNodes.length).toBe(4);
    let children = container.childNodes;
    Array.from(children, (ele, index) => {
      expect(ele.textContent).toContain(dataAsia[index].name.common);
      expect(ele.textContent).toContain(dataAsia[index].population);
      expect(ele.textContent).toContain(dataAsia[index].region);
      expect(ele.textContent).toContain(dataAsia[index].capital);
      expect(ele.innerHTML).toContain(dataAsia[index].flags.png);
    });
    global.score += 1;
  });
  it("sort and filter should work together (asc)", () => {
    handleSortAndFilter();
    let newData = filterByRegionLogic([...mockData], "Asia");
    let sortedData = sortLogic("asc", newData);
    renderData(sortedData);
    let container = document.getElementById("all_countries");
    expect(container.childNodes.length).toBe(4);
    let children = container.childNodes;
    Array.from(children, (ele, index) => {
      expect(ele.textContent).toContain(dataRegionAsc[index].name.common);
      expect(ele.textContent).toContain(dataRegionAsc[index].population);
      expect(ele.textContent).toContain(dataRegionAsc[index].region);
      expect(ele.textContent).toContain(dataRegionAsc[index].capital);
      expect(ele.innerHTML).toContain(dataRegionAsc[index].flags.png);
    });
    global.score += 1;
  });
  it("sort and filter should work together (desc)", () => {
    handleSortAndFilter();
    let newData = filterByRegionLogic([...mockData], "Asia");
    let sortedData = sortLogic("desc", newData);
    renderData(sortedData);
    let container = document.getElementById("all_countries");
    expect(container.childNodes.length).toBe(4);
    let children = container.childNodes;
    Array.from(children, (ele, index) => {
      expect(ele.textContent).toContain(dataRegionDesc[index].name.common);
      expect(ele.textContent).toContain(dataRegionDesc[index].population);
      expect(ele.textContent).toContain(dataRegionDesc[index].region);
      expect(ele.textContent).toContain(dataRegionDesc[index].capital);
      expect(ele.innerHTML).toContain(dataRegionDesc[index].flags.png);
    });
    global.score += 1;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
