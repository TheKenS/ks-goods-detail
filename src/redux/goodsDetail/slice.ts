import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface GoodsDetailState {
  loading: boolean;
  error: string | null;
  info: {
    topInfo: {
      topImgs: string[];
      price: string;
      discount: string;
      title: string;
      serves: string[];
      delivery: string[];
    };
    shopInfo: {
      avatar: string;
      shopName: string;
      sales: string;
      stars: number;
      scores: { name: string; score: number }[];
    };
    details: {
      title: string;
      detailImgs: string[];
    };
  };
  likes: {
    isFetching: boolean;
    pageCount: number;
    items: any[];
  };
}

const initialState: GoodsDetailState = {
  loading: false,
  error: null,
  info: {
    topInfo: {
      topImgs: [],
      price: "",
      discount: "",
      title: "",
      serves: [],
      delivery: [],
    },
    shopInfo: {
      avatar: "",
      shopName: "",
      sales: "",
      stars: 0,
      scores: [],
    },
    details: {
      title: "",
      detailImgs: [],
    },
  },
  likes: {
    isFetching: false,
    pageCount: 0,
    items: [],
  },
};

const headers = new Headers({
  Accept: "application/json",
  "Content-Type": "application/json",
});

export const getGoodsDetail = createAsyncThunk(
  "goods/detail",
  async (params: { goodsId: string }) => {
    const response = await fetch("/mock/shopDetail/111.json", {
      method: "GET",
      headers: headers,
    });
    const data = await response.json();

    return data;
  }
);

export const getLikes = createAsyncThunk(
  "goods/likes",
  async (params: { goodsId: string; pageCount: number }) => {
    const response = await fetch("/mock/shopDetail/likes.json", {
      method: "GET",
      headers: headers,
    });
    const data = await response.json();
    console.log("likesData", data);

    return data;
  }
);

export const goodsDetailSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {},
  extraReducers: {
    [getGoodsDetail.pending.type]: (state) => {
      state.loading = true;
    },
    [getGoodsDetail.fulfilled.type]: (state, action) => {
      state.info = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getGoodsDetail.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getLikes.pending.type]: (state) => {
      state.likes.isFetching = true;
    },
    [getLikes.fulfilled.type]: (state, action) => {
      state.likes.items = [...state.likes.items, ...action.payload];
      state.likes.isFetching = false;
      state.likes.pageCount = state.likes.pageCount + 1;
    },
    [getLikes.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.likes.isFetching = false;
    },
  },
});
