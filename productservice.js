"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategories = exports.getProduct = exports.getProductsCategoryWise = exports.getAllProducts = void 0;
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch('https://fakestoreapi.com/products/1');
    return res.json();
});
exports.getAllProducts = getAllProducts;
const getProductsCategoryWise = (category) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(`https://fakestoreapi.com/products/category/${category}`);
    return res.json();
});
exports.getProductsCategoryWise = getProductsCategoryWise;
const getProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(`https://fakestoreapi.com/products/${productId}`);
    return res.json();
});
exports.getProduct = getProduct;
const getCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(`https://fakestoreapi.com/products/categories`);
    const categories = yield res.json();
    return categories;
});
exports.getCategories = getCategories;
