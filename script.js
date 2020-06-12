var cool = new Vue({
  el: "#cool",
  data: {
    name: " ",
    age: " ",
    email: " ",
    comment: " ",
    message:" "
  },
  
  watch: {
    name: function () {
      if (this.name == " " || str.length(this.name) < 2) {
        this.message = "Not a valid Name";
      } else {
        this.message = " ";
      }
    },
    comment: function () {
      if (str.length(this.comment) >= 251) {
        this.message = "Comment too long";
      } else {
        this.message = " ";
      }
    },
    email: function () {
      if (this.emial == " " || !str.includes("@")) {
        this.message = "Enter a valid email";
      } else {
        this.message = " ";
      }
    }
  }
});