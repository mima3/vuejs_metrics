
  export default {
    name: 'Example',
    data() {
      return {
        text: 'example'
      }
    },
    methods: {
      // complex 3
      test1 () {
        if (this.text) {

        } else if (this.text === 'dog') {

        } else {

        }
      },
      // complex 2
      test2 () {
        try {

        } catch (ex) {

        }
      },
      // complex 2
      test3 () {
        for (var i = 0; i < 10 ; ++i) {

        }
      },
      // complex 2
      test4 () {
        for (var x in [1,2,3]) {

        }
      },
      // complex 2
      test5 () {
        for (var x of [1,2,3]) {

        }
      },
      // complex 2
      test6 () {
        while (true) {

        }
      },
      // complex 2
      test7 () {
        do {

        } while (i < 5);
      },

      // complex 5
      test8 () {
        switch (this.text) {
        case 'A':
          break;
        case 'B':
          break;
        case 'C':
          break;
        default:
        }
      },

      // complex 2
      test8 () {
        var x = this.text === 'dog'?'犬':'猫';
      },

      // complex 4
      test9 () {
        if (this.text !== null || this.text !== '' || this.text === 'inu') {

        }
      }

    }
  }
