// src/contexts/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext({});

export function CartProvider({ children }) {
    const [cart, setCart] = useState({});

    function adicionar(produto) {
        setCart((prev) => {
            const quantidadeAtual = prev[produto.id] ? prev[produto.id].quantidade : 0;
            return {
                ...prev,
                [produto.id]: { ...produto, quantidade: quantidadeAtual + 1 }
            };
        });
    }

    function remover(produtoId) {
        setCart((prev) => {
            if (!prev[produtoId]) return prev;

            const novaQuantidade = prev[produtoId].quantidade - 1;
            const novoCart = { ...prev };

            if (novaQuantidade <= 0) {
                delete novoCart[produtoId];
            } else {
                novoCart[produtoId].quantidade = novaQuantidade;
            }

            return novoCart;
        });
    }

    const getQuantidade = (produtoId) => {
        return cart[produtoId] ? cart[produtoId].quantidade : 0;
    };

    const getTotal = () => {
        return Object.values(cart).reduce((acc, item) => {
            const precoNumerico = parseFloat(
                item.preco.replace('R$', '').replace(',', '.').trim()
            );
            return acc + (precoNumerico * item.quantidade);
        }, 0);
    };

    return (
        <CartContext.Provider value={{ 
            cartItems: Object.values(cart), 
            adicionar, 
            remover, 
            getQuantidade, 
            getTotal 
        }}>
            {children}
        </CartContext.Provider>
    );
}