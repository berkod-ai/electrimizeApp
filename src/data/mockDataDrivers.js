export const mockDataDrivers = [
  { name: "John", imageUrl: "/assets/john.jpg" },
  { name: "Carlos", imageUrl: "/assets/carlos.jpg" },
  { name: "Sarah", imageUrl: "/assets/sarah.jpg" },
  { name: "Michael", imageUrl: "/assets/michael.jpg" },
  { name: "Leo", imageUrl: "/assets/leo.jpg" },
  { name: "Robert", imageUrl: "/assets/robert.jpg" },
];

export const mockDataDriversKM = [
  { date: "NOV-01", km: 124 },
  { date: "NOV-05", km: 167 },
  { date: "NOV-16", km: 135 },
  { date: "NOV-18", km: 132 },
  { date: "NOV-19", km: 74 },
  { date: "NOV-21", km: 158 },
  { date: "NOV-23", km: 111 },
  { date: "NOV-25", km: 118 },
  { date: "NOV-26", km: 52 },
  { date: "NOV-27", km: 97 },
];

export const mockDataDriversKM2 = [
  {
    id: "Jon Snow",
    name: "Jon Snow",
    data: [
      { date: "NOV-01", km: 124 },
      { date: "NOV-05", km: 167 },
      { date: "NOV-16", km: 135 },
      { date: "NOV-18", km: 132 },
      { date: "NOV-19", km: 74 },
      { date: "NOV-21", km: 158 },
      { date: "NOV-23", km: 111 },
      { date: "NOV-25", km: 118 },
      { date: "NOV-26", km: 52 },
      { date: "NOV-27", km: 97 },
    ],
  },
  {
    id: "2",
    name: "Jaime Lannister",
    data: [
      { date: "NOV-01", km: 130 },
      { date: "NOV-05", km: 160 },
      { date: "NOV-16", km: 140 },
      { date: "NOV-18", km: 135 },
      { date: "NOV-19", km: 80 },
      { date: "NOV-21", km: 150 },
      { date: "NOV-23", km: 115 },
      { date: "NOV-25", km: 120 },
      { date: "NOV-26", km: 55 },
      { date: "NOV-27", km: 100 },
    ],
  },

  {
    id: "3",
    name: "Daenerys Targaryen",
    data: [
      { date: "NOV-01", km: 90 },
      { date: "NOV-05", km: 120 },
      { date: "NOV-16", km: 110 },
      { date: "NOV-18", km: 105 },
      { date: "NOV-19", km: 95 },
      { date: "NOV-21", km: 130 },
      { date: "NOV-23", km: 100 },
      { date: "NOV-25", km: 115 },
      { date: "NOV-26", km: 85 },
      { date: "NOV-27", km: 110 },
    ],
  },
  {
    id: "4",
    name: "Ferrara Clifford",
    data: [
      { date: "NOV-01", km: 110 },
      { date: "NOV-05", km: 140 },
      { date: "NOV-16", km: 120 },
      { date: "NOV-18", km: 125 },
      { date: "NOV-19", km: 70 },
      { date: "NOV-21", km: 145 },
      { date: "NOV-23", km: 105 },
      { date: "NOV-25", km: 110 },
      { date: "NOV-26", km: 50 },
      { date: "NOV-27", km: 95 },
    ],
  },
];

export const mockPieDataDriver = [
  {
    id: "harsh_acceleration",
    label: "HARSH ACCELERATION",
    value: 12, // Mock value
    color: "hsl(0, 70%, 50%)", // Red
  },
  {
    id: "overspeeding",
    label: "OVERSPEEDING",
    value: 25, // Mock value
    color: "hsl(60, 70%, 50%)", // Yellow
  },
  {
    id: "harsh_cornering",
    label: "HARSH CORNERING",
    value: 16, // Mock value
    color: "hsl(120, 70%, 50%)", // Green
  },
  {
    id: "idling",
    label: "IDLING",
    value: 9, // Mock value
    color: "hsl(180, 70%, 50%)", // Cyan
  },
  {
    id: "harsh_braking",
    label: "HARSH BRAKING",
    value: 38, // Mock value
    color: "hsl(240, 70%, 50%)", // Blue
  },
];

export const mockDataDriverDistance = [
  { month: "Jan", distance: 12000 },
  { month: "Feb", distance: 18500 },
  { month: "Mar", distance: 19000 },
  { month: "Apr", distance: 19500 },
  { month: "May", distance: 20000 },
  { month: "Jun", distance: 19500 },
  { month: "Jul", distance: 20000 },
  { month: "Aug", distance: 21500 },
  { month: "Sep", distance: 21000 },
  { month: "Oct", distance: 22500 },
  { month: "Nov", distance: 17000 },
  { month: "Dec", distance: 21500 },
];

export const mockDataDriverDuration = [
  { month: "Jan", duration: 120 }, // 120 hours
  { month: "Feb", duration: 110 },
  { month: "Mar", duration: 130 },
  { month: "Apr", duration: 125 },
  { month: "May", duration: 140 },
  { month: "Jun", duration: 135 },
  { month: "Jul", duration: 150 },
  { month: "Aug", duration: 145 },
  { month: "Sep", duration: 160 },
  { month: "Oct", duration: 155 },
  { month: "Nov", duration: 140 },
  { month: "Dec", duration: 130 },
];
