const app = new Vue (
    {
        el: `#root`,
        data : {
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
                    text: 'Finire l \'esercizio',
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
           
        },
    },
);