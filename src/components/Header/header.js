import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#top">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACXCAMAAAAvQTlLAAAAVFBMVEVQq/H///9LqfFFp/A6pPDy+P75/P7H4fqz1/h+vvSay/bp8/1BpvH2+v7f7vyDwPRyufPY6vtar/JqtfOl0PeNxfW/3fmq0/fQ5vpgsvK62vkvoO8thLziAAAEmElEQVR4nO2bWZurIAyGaQAtgiuu9f//z2NtO9PFLRF75oL3aqZPtR8hCQkiYx6Px+PxeDwej8fj8Xg8Hs8PMPK/VbwCRrAsUyqzTJi/og04qIvWcRwEsdRJkw0fTH7vu6pMVsvTC/pixcf3OKuKL8riXRucPpDhoOOJwYKVzim35+vfmboMzp+iRoLy18+4sM1g0hL/GxBVhiLL5jOyBtqbQwHnqr1OtCzwDlbIU4YfjVETU/jkZpaDAdXo27/Np8+t/kA5DKfDDocruSTrKsxe9EN6glY12JpiZ66WVb0SE+YDqtuIUMKg0BhdFP/l9e1a2SHGxBdc/pOIElYsuV+t7ebLTYSRNaYI4KLDqILu9wZqo8WgWwzFT2uB4VmkQ4zZ4MmBg2hbNPO5fDpBkPZGFGUuTxq1EvGXKak3ra8IcyVp2rTx9S9pUTFpmtf7sPWrOcK79E+Wq3Cp4k3XMJerJZRA5Yg7KTIm33WdTiEs3wJsjJeFThW8mrjJopdhpvFOkKKXR5haUBLbzyvDROMdpG+NdJN3yu2sm0GIVKVxkXinSCZvFocwZzPUGkSVxWaLzlObTRayuCX7FBJbJJ7OZskgTycarxkDz5BPt0cbWExHwdB4vUtD6WrJDdpa3OfnrjfPo0b5F10Xg1UDxHVl2UMbLh536JpKrR/IvI6s6IXhBpW/8h2NtthsAdmeoxSla4e9hmp9pbfZQUjrmW/w5V5wDxeqvcZdK4FfizfSEO0Fqbpm9c9yxxGEfYmRIbpCJQQyyrYTEefxugtwknXasUMsFqREXY9sHyctoQxdRVqirsm60B2apuq1rz2ABL+/dAdZTiGpybrQZTEKSmV/g9DeICBsXz7sVRwRh3fIbs8w1QSeeseqDfY4XdRsP/LYMXQPOaveDNYdVX4lpA3MH8yWQppCuU8XO6qY2P2sih8Sk/meGvpusSN8f1c03oHSuSxNT/ZPmAy5T7MKfc1+gbPIbb5APwubVWai1p2sXZ3jsyoOXHAbobZr5gmUE3NBVlapUlVUXtzMZuvGuyAbhhg4bLtdeRfu0d0q9c4l6FeX07p1XyXxKsyRw4/QHoVO63LYSWp3slzWh0Hm8jgO8mH6AmeX5hoM5qg1SnqnshafMSCInc7iiLEOkj3ptM8K3O72sdDNAvQG9Od9c+mqjPiA7yoQ5XGnH6HvQupsuqmdZ5WZrqKVO7RnoChpvSjWzni9IwnnqfCYAltVf0MWALbwQZ50odEX2KiMMQfIiPACXVu0h0biFTCmQeeJ8OhT28Btg874gcP6dFKTMGmLT1xaHbImjnBumK1CyuJYC8ce34m+FwN937MsuuSkFC+xR7tWAZXIpB3INbmGiM/gPj1whnfxV9qDPAvYnu2IXB333oSx1EIwr8yRGX7wjxJfbsWtIr5OgMBAhSsd5DkTX3mThPOiTLZ1j4EM5156OQRjsihcDYLkXBXfMdUvVyvYqNVyMhBimVxUAcd71Yw2IToVNZcwSbSUcXx9W6mtz2WVsf7Q+NugbTDc6EDFyPhaC/9rb595PB6Px+PxeDwej8fj8TjiH32HOfqkeBtKAAAAAElFTkSuQmCC"
          width="30"
          height="30"
          alt=""
        />
      </a>
      <ul class="nav">
      <li class="nav-item"><Link to='/'>Home</Link></li>
      |
      <li class="nav-item"><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  );
};

export default Header;