import { Router } from 'express'
const pageRouter = Router();

// import controllers
import { getPages } from '../controllers/pageController.js'

// Questions routes
pageRouter.route('/pages')
    .get(getPages)          // GET request
    // .post()      // POST request
    // .delete()    // DELETE request

export default pageRouter;