export default function Footer() {
  return (
    <footer className="bg-white">

      {/* Top Footer Content */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-[120px] py-24">

        {/* Grid Container */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-x-16 
          gap-y-16 
          text-[13px] 
          text-gray-700
        ">

          {/* Column 1 */}
          <div>
            <h3 className="text-[12px] font-semibold tracking-widest mb-6 text-black">
              ABOUT PARCKS
            </h3>
            <ul className="space-y-3">
              <li>PARCKS</li>
              <li>Core Values</li>
              <li>Jobs</li>
              <li>Investors</li>
              <li>Leading Staff</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-[12px] font-semibold tracking-widest mb-6 text-black">
              ENGAGEMENTS
            </h3>
            <ul className="space-y-3">
              <li>Ethical Suppliers</li>
              <li>Faire Trade</li>
              <li>Traceability</li>
              <li>Privacy</li>
              <li>Accessibility</li>
              <li>Environment Protection</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-[12px] font-semibold tracking-widest mb-6 text-black">
              SHOP
            </h3>
            <ul className="space-y-3">
              <li>Capsule</li>
              <li>Home</li>
              <li>Accessories</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-[12px] font-semibold tracking-widest mb-6 text-black">
              SUPPORT
            </h3>
            <ul className="space-y-3">
              <li>Assistance</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="
          max-w-[1200px] 
          mx-auto 
          px-6 
          sm:px-10 
          lg:px-[120px] 
          py-6 
          text-[11px] 
          text-gray-600
        ">
          <div className="
            flex 
            flex-col 
            md:flex-row 
            md:items-center 
            md:justify-between 
            gap-4
          ">

            {/* Left */}
            <div>
              2022 PARCKS INC. ALL RIGHTS RESERVED.
            </div>

            {/* Center */}
            <div className="flex gap-8">
              <span>PRIVACY POLICY</span>
              <span>ACCESSIBILITY</span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-red-600 inline-block"></span>
              <span>UNITED STATES</span>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
}
