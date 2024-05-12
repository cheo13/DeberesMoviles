import create from "zustand";

interface BearState {
  products: number;
  produce: (amount: number) => void;
  stock: number;
  distribute: (amount: number) => void;
}
interface BearS {
  products: { [productId: number]: number }; // Objeto donde las claves son los IDs de los productos y los valores son los stocks
  produce: (productId: number, amount: number) => void;
  stock: { [productId: number]: number };
  distribute: (productId: number, amount: number) => void;
}

export const useBearStore = create<BearState>((set) => ({
  products: 0,
  produce: (amount) =>
    set((state) => ({
      products: state.products + amount,
      stock: state.stock + amount, // Incrementar el stock al producir
    })),
  stock: 0,
  distribute: (amount) =>
    set((state) => {
      const newStock = state.stock - amount;
      // Verificar que el stock no sea negativo
      const actualAmount = Math.max(newStock, 0);
      return {
        products: state.products - amount + actualAmount, // Restar solo la cantidad distribuida del total de productos
        stock: actualAmount,
      };
    }),
}));
export const useBear = create<BearS>((set) => ({
  products: {},
  stock: {}, // Cambiar de '0' a '{}'
  produce: (productId, amount) =>
    set((state) => ({
      products: {
        ...state.products,
        [productId]: (state.products[productId] || 0) + amount,
      },
      stock: {
        ...state.stock,
        [productId]: (state.stock[productId] || 0) + amount,
      },
    })),
  distribute: (productId, amount) =>
    set((state) => {
      const newStock = Math.max((state.products[productId] || 0) - amount, 0);
      return {
        products: {
          ...state.products,
          [productId]: newStock,
        },
        stock: {
          ...state.stock,
          [productId]: newStock,
        },
      };
    }),
}));
