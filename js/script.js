const { createApp } = Vue;

function getRandomDate() {
    const start = new Date(2020, 0, 1).getTime();
    const end = new Date().getTime();
    const randomTimestamp = Math.floor(Math.random() * (end - start) + start);
    return dayjs(randomTimestamp).format('DD/MM/YYYY HH:mm:ss');
}

createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: getRandomDate(),
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: getRandomDate(),
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: getRandomDate(),
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: getRandomDate(),
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: getRandomDate(),
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: getRandomDate(),
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: getRandomDate(),
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: getRandomDate(),
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: getRandomDate(),
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Giulia',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: getRandomDate(),
                            message: 'Hey, ci sei per un caffè domani?',
                            status: 'sent'
                        },
                        {
                            date: getRandomDate(),
                            message: 'Certo, a che ora?',
                            status: 'received'
                        },
                        {
                            date: getRandomDate(),
                            message: 'Alle 15:00 va bene?',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Luca',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: getRandomDate(),
                            message: 'Hai visto il nuovo film?',
                            status: 'received'
                        },
                        {
                            date: getRandomDate(),
                            message: 'Non ancora, ne vale la pena?',
                            status: 'sent'
                        },
                        {
                            date: getRandomDate(),
                            message: 'Assolutamente sì, te lo consiglio!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Elena',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: getRandomDate(),
                            message: 'Ci vediamo stasera?',
                            status: 'sent'
                        },
                        {
                            date: getRandomDate(),
                            message: 'Sì, ci sarò!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: getRandomDate(),
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: getRandomDate(),
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: getRandomDate(),
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: getRandomDate(),
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: getRandomDate(),
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: getRandomDate(),
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: getRandomDate(),
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: getRandomDate(),
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: getRandomDate(),
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Giulia',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: getRandomDate(),
                            message: 'Hey, ci sei per un caffè domani?',
                            status: 'sent'
                        },
                        {
                            date: getRandomDate(),
                            message: 'Certo, a che ora?',
                            status: 'received'
                        },
                        {
                            date: getRandomDate(),
                            message: 'Alle 15:00 va bene?',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Luca',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: getRandomDate(),
                            message: 'Hai visto il nuovo film?',
                            status: 'received'
                        },
                        {
                            date: getRandomDate(),
                            message: 'Non ancora, ne vale la pena?',
                            status: 'sent'
                        },
                        {
                            date: getRandomDate(),
                            message: 'Assolutamente sì, te lo consiglio!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Elena',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: getRandomDate(),
                            message: 'Ci vediamo stasera?',
                            status: 'sent'
                        },
                        {
                            date: getRandomDate(),
                            message: 'Sì, ci sarò!',
                            status: 'received'
                        }
                    ],
                }
            ],
            currentContactIndex: 0,
            newMessage: '',
            searchQuery: ''
        }
    },
    computed: {
        selectedContact() {
            return this.contacts[this.currentContactIndex];
        },
        filteredContacts() {
            return this.contacts.filter(contact =>
                contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
    },
    methods: {
        selectContact(index) {
            this.currentContactIndex = index;
        },
        sendMessage() {
            if (this.newMessage.trim() !== '') {
                this.contacts[this.currentContactIndex].messages.push({
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    message: this.newMessage,
                    status: 'sent'
                });
                this.newMessage = '';
                setTimeout(() => {
                    this.contacts[this.currentContactIndex].messages.push({
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        message: 'Ok, ho ricevuto il tuo messaggio!',
                        status: 'received'
                    });
                }, 1000);
            }
        }
    }
}).mount('#app');