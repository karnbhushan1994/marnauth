// get all questions
export function getPages(req, res) {
    try {
        res.send('api working!!! You are now on get pages');
    } catch (error) {
        console.log(error.message);
    }
  }
