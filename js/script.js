const { createApp } = Vue;

createApp({
    data() {
        return {
            listaSpesa: [
                {
                    name: 'pane',
                    completed: false
                },
                {
                    name: 'acqua',
                    completed: false
                },
            ],
            ingredient: '',
            error: false,
        }
    },
    methods: {
        newIngredient() {
            if (!this.ingredient) {
                this.error = true
                return
            }
            const newItem = {
                name: this.ingredient,
                completed: false
            }
            this.listaSpesa.push(newItem)
            this.ingredient = ''
            this.error = false
        },
        deleteIngredient(i) {
            this.listaSpesa.splice(i, 1)
        },
        complete(i) {
            if (this.listaSpesa[i].completed) {
                this.listaSpesa[i].completed = false;
            } else {
                this.listaSpesa[i].completed = true;
            }
        }
    }
}).mount('#app');