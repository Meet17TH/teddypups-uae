export interface HomeTicket {
  id: string;
  name: string;
  breed: string;
  gender: string;
  destination: string;
  ticketNo: string;
  status: 'home ♥';
  image?: string;
}

export const TICKETS: HomeTicket[] = [
  { id: 't1', name: 'Ace', breed: 'Pomeranian', gender: 'boy', destination: 'TeddyPups Family', ticketNo: 'TP-9014', status: 'home ♥' },
  { id: 't2', name: 'Leo', breed: 'Poodle', gender: 'boy', destination: 'TeddyPups Family', ticketNo: 'TP-9015', status: 'home ♥' },
  { id: 't3', name: 'Mia', breed: 'Maltipoo', gender: 'girl', destination: 'Dubai showroom', ticketNo: 'TP-9016', status: 'home ♥' },
  { id: 't4', name: 'Sadie', breed: 'Maltipoo', gender: 'girl', destination: 'TeddyPups Family', ticketNo: 'TP-9017', status: 'home ♥' },
  { id: 't5', name: 'Blue', breed: 'Pomeranian', gender: 'boy', destination: 'TeddyPups Family', ticketNo: 'TP-9018', status: 'home ♥' },
  { id: 't6', name: 'Ollie', breed: 'Pomsky', gender: 'boy', destination: 'TeddyPups Family', ticketNo: 'TP-9019', status: 'home ♥' },
  { id: 't7', name: 'Bruno', breed: 'Maltipoo', gender: 'boy', destination: 'Dubai showroom', ticketNo: 'TP-9020', status: 'home ♥' },
  { id: 't8', name: 'Buddy', breed: 'Maltese', gender: 'boy', destination: 'Dubai showroom', ticketNo: 'TP-9021', status: 'home ♥' },
  { id: 't9', name: 'Charlie', breed: 'Maltese', gender: 'boy', destination: 'TeddyPups Family', ticketNo: 'TP-9022', status: 'home ♥' },
  { id: 't10', name: 'Daisy', breed: 'Pomeranian', gender: 'girl', destination: 'Dubai showroom', ticketNo: 'TP-9023', status: 'home ♥' },
  { id: 't11', name: 'Bella', breed: 'Pomeranian', gender: 'girl', destination: 'TeddyPups Family', ticketNo: 'TP-9024', status: 'home ♥' },
  { id: 't12', name: 'Teddy', breed: 'Poodle', gender: 'boy', destination: 'TeddyPups Family', ticketNo: 'TP-9025', status: 'home ♥' },
  { id: 't13', name: 'Molly', breed: 'Poodle', gender: 'girl', destination: 'Dubai showroom', ticketNo: 'TP-9026', status: 'home ♥' },
  { id: 't14', name: 'Coco', breed: 'Pomsky', gender: 'girl', destination: 'TeddyPups Family', ticketNo: 'TP-9027', status: 'home ♥' },
  { id: 't15', name: 'Rosie', breed: 'Pomsky', gender: 'girl', destination: 'Dubai showroom', ticketNo: 'TP-9028', status: 'home ♥' },
  { id: 't16', name: 'Leo', breed: 'Pomeranian', gender: 'boy', destination: 'Dubai showroom', ticketNo: 'TP-9029', status: 'home ♥' },
  { id: 't17', name: 'Molly', breed: 'Poodle', gender: 'girl', destination: 'TeddyPups Family', ticketNo: 'TP-9030', status: 'home ♥' },
  { id: 't18', name: 'Rocky', breed: 'Poodle', gender: 'boy', destination: 'TeddyPups Family', ticketNo: 'TP-9031', status: 'home ♥' },
  { id: 't19', name: 'Sophie', breed: 'Maltipoo', gender: 'girl', destination: 'Dubai showroom', ticketNo: 'TP-9032', status: 'home ♥' },
  { id: 't20', name: 'Lola', breed: 'Maltipoo', gender: 'girl', destination: 'Dubai showroom', ticketNo: 'TP-9033', status: 'home ♥' },
  { id: 't21', name: 'Rex', breed: 'Pomeranian', gender: 'boy', destination: 'TeddyPups Family', ticketNo: 'TP-9034', status: 'home ♥' }
];
