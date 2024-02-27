import axios from "axios";
import { Md5 } from "ts-md5";

const password = "Valantis_";
let items: string[] = [];
export let end: number;

export const filterPrice = async (
  filterString: number,
  changeItems: React.Dispatch<
    React.SetStateAction<
      {
        brand: string;
        id: string;
        price: number;
        product: string;
      }[]
    >
  >
) => {
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
      params: { price: filterString },
    },
  })
    .then(function (response) {
      items = response.data.result;
      getFields(changeItems);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const filterName = async (
  filterString: string,
  changeItems: React.Dispatch<
    React.SetStateAction<
      {
        brand: string;
        id: string;
        price: number;
        product: string;
      }[]
    >
  >
) => {
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
      getFields(changeItems);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const filterBrand = async (
  filterString: string,
  changeItems: React.Dispatch<
    React.SetStateAction<
      {
        brand: string;
        id: string;
        price: number;
        product: string;
      }[]
    >
  >
) => {
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
      getFields(changeItems);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getInitialItems = async (
  changeItems: React.Dispatch<
    React.SetStateAction<
      {
        brand: string;
        id: string;
        price: number;
        product: string;
      }[]
    >
  >
) => {
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
      getFields(changeItems);
      console.log(response);
      // changeItems(response.data.result);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getFields = async (
  changeItems: React.Dispatch<
    React.SetStateAction<
      {
        brand: string;
        id: string;
        price: number;
        product: string;
      }[]
    >
  >
) => {
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
      end = items.length;
      changeItems(response.data.result);
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
