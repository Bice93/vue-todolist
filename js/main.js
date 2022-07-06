const app = new Vue (
    {
        el: `#root`,
        data : {
            newElement: ``,
            todos : [
                {
                    text: 'Fare la spesa',
                    done: false,
                },
                {
                    text: 'Fare il bucato',
                    done: true,
                },
                {
                    text: 'Finire l\'esercizio',
                    done: false,
                },
                {
                    text: 'Trovare i soldi per affrontare dignitosamente i matrimoni',
                    done: false,
                },
                {
                    text: `Fare una shopping List`,
                    done: true,
                },
                {
                    text: 'Riposarsi tra una cosa e l\'altra',
                    done: false,
                },
            ],
        },

        methods : {
           deleteTodoElement : function (currentElement) {
                this.todos.splice(currentElement, 1);
                console.log(this.todos)
           },

           addNewElement : function (currentNewElement){
            this.todos.push({text: currentNewElement, done: false});
            console.log(this.todos)
           }
        },
    },
);