import axios from "axios";
import { Md5 } from "ts-md5";
import { Request, RequestItem } from "./Table.types";

const password = "Valantis_";
let items: string[] = [];
const myError = (msg: string) => {
  console.log("%c" + msg, "color: red; font-weight:bold;");
};

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

export const filterPrice = ({
  filterString,
  changeItems,
  setCurrentValueToZero,
  setIsLoading,
  setIsNotFound,
}: Request) => {
  setIsLoading(true);
  changeItems([]);
  let tryNumber = 0;
  const request = () => {
    const now = new Date().toISOString().split("T")[0];
    const nowRightFormat =
      now.split("-")[0] + now.split("-")[1] + now.split("-")[2];
    axios({
      method: "post",
      url: "https://api.valantis.store:41000/",
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
        getFields({
          changeItems,
          setCurrentValueToZero,
          setIsLoading,
          setIsNotFound,
        });
      })
      .catch(function (error) {
        if (tryNumber === 3) {
          setIsLoading(false);
          return;
        }
        myError(error.message);
        tryNumber++;
        request();
      });
  };
  request();
};

export const filterName = ({
  filterString,
  changeItems,
  setCurrentValueToZero,
  setIsLoading,
  setIsNotFound,
}: Request) => {
  setIsLoading(true);
  changeItems([]);
  let tryNumber = 0;
  const request = () => {
    const now = new Date().toISOString().split("T")[0];
    const nowRightFormat =
      now.split("-")[0] + now.split("-")[1] + now.split("-")[2];
    axios({
      method: "post",
      url: "https://api.valantis.store:41000/",
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
        getFields({
          changeItems,
          setCurrentValueToZero,
          setIsLoading,
          setIsNotFound,
        });
      })
      .catch(function (error) {
        if (tryNumber === 3) {
          setIsLoading(false);
          return;
        }
        myError(error.message);
        tryNumber++;
        request();
      });
  };
  request();
};

export const filterBrand = ({
  filterString,
  changeItems,
  setCurrentValueToZero,
  setIsLoading,
  setIsNotFound,
}: Request) => {
  let tryNumber = 0;
  setIsLoading(true);
  changeItems([]);

  const request = () => {
    const now = new Date().toISOString().split("T")[0];
    const nowRightFormat =
      now.split("-")[0] + now.split("-")[1] + now.split("-")[2];
    axios({
      method: "post",
      url: "https://api.valantis.store:41000/",
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
        getFields({
          changeItems,
          setCurrentValueToZero,
          setIsLoading,
          setIsNotFound,
        });
      })
      .catch(function (error) {
        if (tryNumber === 3) {
          setIsLoading(false);
          return;
        }
        myError(error.message);
        tryNumber++;
        request();
      });
  };
  request();
};

export const getInitialItems = ({
  changeItems,
  setCurrentValueToZero,
  setIsLoading,
  setIsNotFound,
}: Request) => {
  setIsLoading(true);
  changeItems([]);
  let tryNumber = 0;

  const request = () => {
    const now = new Date().toISOString().split("T")[0];
    const nowRightFormat =
      now.split("-")[0] + now.split("-")[1] + now.split("-")[2];

    axios({
      method: "post",
      url: "https://api.valantis.store:41000/",
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
        setIsLoading(false);
        getFields({
          changeItems,
          setCurrentValueToZero,
          setIsLoading,
          setIsNotFound,
        });
      })
      .catch(function (error) {
        if (tryNumber === 3) {
          setIsLoading(false);
          return;
        }
        myError(error.message);
        tryNumber++;
        request();
      });
  };
  request();
};

export const getFields = ({
  changeItems,
  setCurrentValueToZero,
  setIsLoading,
  setIsNotFound,
}: Request) => {
  setIsLoading(true);
  let tryNumber = 0;
  const request = () => {
    const now = new Date().toISOString().split("T")[0];
    const nowRightFormat =
      now.split("-")[0] + now.split("-")[1] + now.split("-")[2];

    axios({
      method: "post",
      url: "https://api.valantis.store:41000/",
      headers: {
        "X-Auth": Md5.hashStr(`${password}${nowRightFormat}`),
      },
      data: {
        action: "get_items",
        params: { ids: items },
      },
    })
      .then(function (response) {
        setCurrentValueToZero();
        const result = deleteDublicates(response.data.result);
        end = result.length;
        if (items.length === 0) {
          setIsNotFound(true);
        }
        changeItems(result);
        setIsLoading(false);
      })
      .catch(function (error) {
        if (tryNumber === 3) {
          setIsLoading(false);
          return;
        }
        myError(error.message);
        tryNumber++;
        request();
      });
  };
  request();
};
