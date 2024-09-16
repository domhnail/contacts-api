import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Contacts route');
});

// Get all contacts
router.get('/all', (req, res) => {
  res.send('All contacts');
});
    
// Get a contact by id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send('Contact by id ' + id);
});

// Create a contact
router.post('/create', (req,res) => {
  res.send('Create a contact.');
});

// Update a contact
router.put('/update', (req,res) => {
  res.send('Update a contact.');
});

//delete a contact
router.delete('/delete',(req,res) => {
  res.send('Delete a contact.');
});


export default router;