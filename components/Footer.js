function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 ">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>

        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Diversity & Belonging</p>
        <p>This is not a real site</p>
        <p>Its a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>Accessibility</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Host your home</p>
        <p>Responsible hosting</p>
        <p>Host an Online Experience</p>
        <p>Resource Center</p>
        <p>Community Center</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Support is Nice</p>
        <p>Neighborhood Support</p>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Cancellation options</p>
      </div>
    </div>
  );
}

export default Footer;
