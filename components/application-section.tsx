import { BanknoteIcon, Book, BookIcon, BookOpenCheckIcon, Building2Icon, DumbbellIcon, HammerIcon, MessageSquareIcon, StoreIcon, Wrench } from "lucide-react";

const ApplicationSection = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-4 lg:px-48 mt-10">
      <h3 className="text-xl font-semibold">Applications that can be made</h3>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <BookOpenCheckIcon />
            <h4 className="text-lg font-semibold">Online Attendance</h4>
          </div>
          <p>With the times, your team may be able to work in the office or outside the office. Get the accuracy of your team&apos;s work hours with your own company&apos;s special online attendance feature with features such as:</p>
          <ul className="list-disc px-4">
            <li>Clock in and Clock Out attendance</li>
            <li>Face Photo</li>
            <li>Face Recognition</li>
            <li>Accurate time stamp down to seconds</li>
            <li>GPS location of employees</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <DumbbellIcon />
            <h4 className="text-lg font-semibold">Sport Center</h4>
          </div>
          <p>Create your sports center field booking application. Suitable for futsal, mini soccer, badminton, tennis, golf, basketball, to table tennis. Give your customers the freedom to</p>
          <ul className="list-disc px-4">
            <li>Choose a booking schedule</li>
            <li>Online payments</li>
            <li>Automatic scheduling system</li>
            <li>Search for Friends feature</li>
            <li>Split Payment with team members</li>
            <li>Information and announcements from you</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <BookIcon />
            <h4 className="text-lg font-semibold">Booking</h4>
          </div>
          <p>Offer your services in your own application to place orders to delivery directly to the client&apos;s house. Suitable for ac service, cleaning, cleaning service, CCTV, massage, and even other digital services. Features that can be made:</p>
          <ul className="list-disc px-4">
            <li>Memilih jenis dan kategori jasa yang dikehendaki</li>
            <li>Melakukan reservasi online dan pembayaran dengan metode pembayaran digital</li>
            <li>Penjadwalan dengan tim lapangan</li>
            <li>Aplikasi khusus untuk tim</li>
            <li>Promosi dan Kode voucher khusus</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2  ">
        <div className="flex gap-x-1">
          <StoreIcon />
          <h4>E-commerce</h4>
        </div>
        <div className="flex gap-x-1">
          <Building2Icon />
          <h4>Company Profile</h4>
        </div>
        <div className="flex gap-x-1">
          <BanknoteIcon />
          <h4>Cashier</h4>
        </div>
        <div className="flex gap-x-1">
          <MessageSquareIcon />
          <h4>Chat</h4>
        </div>
        <div className="flex gap-x-1">
          <Wrench />
          <h4>Workshop</h4>
        </div>
        <div className="flex gap-x-1">
          <HammerIcon />
          <h4>Construction</h4>
        </div>
        <div className="flex">
          <h4>And many others</h4>
        </div>
      </div>
    </div>
  );
}

export default ApplicationSection;