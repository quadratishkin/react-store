import axios from "axios";
import { Md5 } from "ts-md5";
import { Request, RequestItem } from "./Table.types";

const password = "Valantis_";
let items: string[] = [];
export let end: number;

const deleteDublicates = (array: RequestItem[]) => {
  const result = array.reduce(function (acum: RequestItem[], item) {
    let dublicate = false;
    for (const iterator of acum) {
      if (
        iterator.product === item.product &&
        iterator.price === item.price &&
        iterator.brand === item.brand
      ) {
        dublicate = true;
      }
    }
    if (dublicate) {
      return acum;
    } else {
      return acum.concat(item);
    }
  }, []);
  return result;
};

export const filterPrice = async ({ filterString, changeItems }: Request) => {
  let tryNumber = 0;
  const now = new Date().toISOString().split("T")[0];
  const nowRightFormat =
    now.split("-")[0] + now.split("-")[1] + now.split("-")[2];
  await axios({
    method: "post",
    url: "http://api.valantis.store:40000/",
    headers: {
      "X-Auth": Md5.hashStr(`${password}${nowRightFormat}`),
    },
    data: {
      action: "filter",
      params: { price: Number(filterString) },
    },
  })
    .then(function (response) {
      items = response.data.result;
      getFields({ changeItems });
    })
    .catch(function (error) {
      if (tryNumber === 3) {
        console.log(error);
      } else {
        tryNumber++;
        filterPrice({ filterString, changeItems });
      }
    });
};

export const filterName = async ({ filterString, changeItems }: Request) => {
  let tryNumber = 0;
  const now = new Date().toISOString().split("T")[0];
  const nowRightFormat =
    now.split("-")[0] + now.split("-")[1] + now.split("-")[2];
  await axios({
    method: "post",
    url: "http://api.valantis.store:40000/",
    headers: {
      "X-Auth": Md5.hashStr(`${password}${nowRightFormat}`),
    },
    data: {
      action: "filter",
      params: { product: filterString },
    },
  })
    .then(function (response) {
      items = response.data.result;
      getFields({ changeItems });
    })
    .catch(function (error) {
      if (tryNumber === 3) {
        console.log(error);
      } else {
        tryNumber++;
        filterName({ filterString, changeItems });
      }
    });
};

export const filterBrand = async ({ filterString, changeItems }: Request) => {
  let tryNumber = 0;
  const now = new Date().toISOString().split("T")[0];
  const nowRightFormat =
    now.split("-")[0] + now.split("-")[1] + now.split("-")[2];
  await axios({
    method: "post",
    url: "http://api.valantis.store:40000/",
    headers: {
      "X-Auth": Md5.hashStr(`${password}${nowRightFormat}`),
    },
    data: {
      action: "filter",
      params: { brand: filterString },
    },
  })
    .then(function (response) {
      items = response.data.result;
      getFields({ changeItems });
    })
    .catch(function (error) {
      if (tryNumber === 3) {
        console.log(error);
      } else {
        tryNumber++;
        filterBrand({ filterString, changeItems });
      }
    });
};

export const getInitialItems = async ({ changeItems }: Request) => {
  let tryNumber = 0;
  const now = new Date().toISOString().split("T")[0];
  const nowRightFormat =
    now.split("-")[0] + now.split("-")[1] + now.split("-")[2];

  await axios({
    method: "post",
    url: "http://api.valantis.store:40000/",
    headers: {
      "X-Auth": Md5.hashStr(`${password}${nowRightFormat}`),
    },
    data: {
      action: "get_ids",
      params: { offset: 0, limit: 50 },
    },
  })
    .then(function (response) {
      items = response.data.result;
      getFields({ changeItems });
    })
    .catch(function (error) {
      if (tryNumber === 3) {
        console.log(error);
      } else {
        tryNumber++;
        getInitialItems({ changeItems });
      }
    });
};

export const getFields = async ({ changeItems }: Request) => {
  let tryNumber = 0;
  const now = new Date().toISOString().split("T")[0];
  const nowRightFormat =
    now.split("-")[0] + now.split("-")[1] + now.split("-")[2];

  axios({
    method: "post",
    url: "http://api.valantis.store:40000/",
    headers: {
      "X-Auth": Md5.hashStr(`${password}${nowRightFormat}`),
    },
    data: {
      action: "get_items",
      params: { ids: items },
    },
  })
    .then(function (response) {
      const result = deleteDublicates(response.data.result);
      end = result.length;
      changeItems(result);
    })
    .catch(function (error) {
      if (tryNumber === 3) {
        console.log(error);
      } else {
        tryNumber++;
        getFields({ changeItems });
      }
    });
};
