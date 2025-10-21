import { Injectable,signal,computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  items = signal<Array<{ id: number; name: string }>>([
{ id: 1, name: 'Alpha' },
{ id: 2, name: 'Bravo' },
{ id: 3, name: 'Charlie' }
]);

// filtro como signal
filter = signal<string>('');


// computed: lista filtrada
filtered = computed(() => {
const f = this.filter().trim().toLowerCase();
const arr = this.items();
return f ? arr.filter(i => i.name.toLowerCase().includes(f)) : arr;
});


// mutators
add(name: string) {
const arr = this.items();
const id = arr.length ? Math.max(...arr.map(i => i.id)) + 1 : 1;
this.items.set([...arr, { id, name }]);
}


remove(id: number) {
this.items.set(this.items().filter(i => i.id !== id));
}


setFilter(value: string) {
this.filter.set(value);
}
}
