import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from "react";
import { Product } from "../data/type/product";

type CartItem = {
  productId: number;
  quantity: number;
};

type CartState = {
  products: (Product & { quantity: number })[];
};

type Action =
  | { type: "ADD"; payload: Product }
  | { type: "SUB"; payload: { id: number; quantity: number } }
  | { type: "REMOVE"; payload: { id: number } }
  | { type: "CLEAR" };

interface CartContextProps {
  items: CartItem[];
  addToCart: (productId: number) => void;
}

const initialState: CartState = {
  products: [],
};

const cartContext = createContext({} as CartContextProps);

const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case "ADD": {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === existingProduct.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      }
      return {
        ...state,
        products: [
          ...state.products,
          {
            ...action.payload,
            quantity: 1,
          },
        ],
      };
    }

    case "SUB": {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (
        existingProduct &&
        existingProduct.quantity > action.payload.quantity
      ) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === existingProduct.id
              ? {
                  ...product,
                  quantity: product.quantity - action.payload.quantity,
                }
              : product
          ),
        };
      }

      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    }
    case "REMOVE":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };

    case "CLEAR":
      return {
        ...state,
        products: [],
      };
    default:
      return state;
  }
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (productId: number) => {
    setItems((state) => {
      const productInCart = state.some((item) => item.productId == productId);

      if (productInCart) {
        return state.flatMap((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, { productId, quantity: 1 }];
    });
  };

  return (
    <cartContext.Provider value={{ items, addToCart }}>
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}
