import { Link } from "react-router";
import svgPaths from "../imports/svg-wcuc713lql";

export function UntzLogo({ className = "", color = "white" }: { className?: string; color?: string }) {
  return (
    <div className={className} style={{ width: "92px", height: "23px" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 23">
        <g clipPath="url(#untz-logo-clip)">
          <path clipRule="evenodd" d={svgPaths.p2e288000} fill={color} fillRule="evenodd" />
        </g>
        <defs>
          <clipPath id="untz-logo-clip">
            <rect fill="white" height="23" width="92" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface SiteHeaderProps {
  onClickInstruments?: () => void;
  onClickJoin?: () => void;
}

export function SiteHeader({ onClickInstruments, onClickJoin }: SiteHeaderProps) {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[644px]">
      <div className="backdrop-blur-[35px] bg-black/90 flex items-center justify-between pl-4 pr-2 py-2 rounded-2xl border border-white/10">
        <Link to="/">
          <UntzLogo color="white" />
        </Link>
        <div className="flex items-center gap-6">
          {onClickInstruments ? (
            <button
              onClick={onClickInstruments}
              className="text-white text-sm md:text-base font-medium hover:opacity-70 transition-opacity cursor-pointer"
            >
              UN-001
            </button>
          ) : (
            <Link
              to="/"
              className="text-white text-sm md:text-base font-medium hover:opacity-70 transition-opacity"
            >
              UN-001
            </Link>
          )}
          {onClickJoin ? (
            <button
              onClick={onClickJoin}
              className="bg-white text-black px-4 py-2 rounded-lg text-sm md:text-base font-medium hover:bg-gray-200 transition-colors cursor-pointer"
            >
              Contact
            </button>
          ) : (
            <Link
              to="/"
              className="bg-white text-black px-4 py-2 rounded-lg text-sm md:text-base font-medium hover:bg-gray-200 transition-colors"
            >
              Join
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="py-12 max-w-[1280px] mx-auto px-8 md:px-[33px] flex justify-start text-black text-sm md:text-base font-medium">
      <p>
        Untz B.V. / KvK 81608217 /{" "}
        <Link to="/privacy" className="underline underline-offset-2 hover:opacity-60 transition-opacity">
          Privacy Policy
        </Link>
      </p>
    </footer>
  );
}
