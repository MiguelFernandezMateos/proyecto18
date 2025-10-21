import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-pesado',
  standalone: true,
  template: `
    <div class="heavy">
      <h3>Componente Pesado (simulado)</h3>
      <p>Imagina aquí un gráfico grande o librería externa.</p>
      <p>Rendered at: {{ now }}</p>
      <!-- Imagen pesada cargada desde public -->
      <img src="/imagen-pesada.jpeg" alt="Imagen pesada" style="width:100%; max-width:600px; margin-top:1rem;">
    </div>
  `
})
export class ComponentePesadoComponent {
  now = new Date().toISOString();
}
