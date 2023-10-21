import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})



export class ProductComponent {

  productos = [
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY0MDIzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkxNTE2NTQ3MTgzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 1',
      valor: '$500'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 2',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY0MDIzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkxNTE2NTQ3MTgzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 3',
      valor: '$500'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 4',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY0MDIzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkxNTE2NTQ3MTgzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 5',
      valor: '$500'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 6',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY0MDIzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkxNTE2NTQ3MTgzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 7',
      valor: '$500'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 8',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY0MDIzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkxNTE2NTQ3MTgzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 9',
      valor: '$500'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 10',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY0MDIzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkxNTE2NTQ3MTgzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 11',
      valor: '$500'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 12',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY0MDIzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkxNTE2NTQ3MTgzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 13',
      valor: '$500'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 14',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY0MDIzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkxNTE2NTQ3MTgzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 15',
      valor: '$500'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 16',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY0MDIzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkxNTE2NTQ3MTgzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 17',
      valor: '$500'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 18',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY0MDIzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkxNTE2NTQ3MTgzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 19',
      valor: '$500'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 20',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY0MDIzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkxNTE2NTQ3MTgzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 21',
      valor: '$500'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 22',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 23',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY0MDIzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkxNTE2NTQ3MTgzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 24',
      valor: '$500'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 25',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY0MDIzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkxNTE2NTQ3MTgzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 26',
      valor: '$500'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 27',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY0MDIzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkxNTE2NTQ3MTgzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 28',
      valor: '$500'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 29',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 30',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY0MDIzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkxNTE2NTQ3MTgzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 31',
      valor: '$500'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 32',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY0MDIzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkxNTE2NTQ3MTgzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 33',
      valor: '$500'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 34',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY0MDIzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkxNTE2NTQ3MTgzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 35',
      valor: '$500'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 36',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 37',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY0MDIzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkxNTE2NTQ3MTgzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 38',
      valor: '$500'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 39',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY0MDIzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkxNTE2NTQ3MTgzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 40',
      valor: '$500'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 41',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY0MDIzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkxNTE2NTQ3MTgzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 42',
      valor: '$500'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 43',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 44',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY0MDIzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkxNTE2NTQ3MTgzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 45',
      valor: '$500'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 46',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY0MDIzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkxNTE2NTQ3MTgzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 47',
      valor: '$500'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 48',
      valor: '$750'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY0MDIzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkxNTE2NTQ3MTgzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 48',
      valor: '$500'
    },
    {
      imagen: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjc1MjQ0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkzNTY2MTkzNDQyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=',
      nombre: 'Producto 49',
      valor: '$750'
    },
  ];

  contador: number = 8;

  cargarMas() {
    this.contador += 8;
  }
}

