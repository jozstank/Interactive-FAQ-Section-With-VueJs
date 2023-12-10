const { createApp } = Vue;
// Vue Instance
const app = createApp({
  data() {
    return {
      // Questions

      questions: [
        {
          id: 1,
          title: "Question 1",
          open: false,
          answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 2,
          title: "Question 2",
          open: false,
          answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 3,
          title: "Question 3",
          open: false,
          answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 4,
          title: "Question 4",
          open: false,
          answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 5,
          title: "Question 5",
          open: false,
          answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
    };
  },

  methods: {
    show(index) {
      this.questions[index - 1].open = true;
    },
    hide(index) {
      this.questions[index - 1].open = false;
    },
  },
});
app.mount("#app");
