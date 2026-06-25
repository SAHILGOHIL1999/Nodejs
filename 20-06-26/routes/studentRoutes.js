import { home, addPage, insertData, deleteData, editData, updataData } from "../controllers/studentList.js";
import { Router } from "express";

const router = router()

router.get('/', home);
router.get('/addStudent', addPage);
router.post('/insertData', insertData);
router.get('/deleteData', deleteData);
router.get('/editData', editData);
router.post('/updateData', updataData);

export default router