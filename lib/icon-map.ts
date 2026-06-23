/**
 * Maps per-app emoji strings (from apps.json `icon` field) to itshover animated icon components.
 */
import { ComponentType, RefAttributes } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "@/components/ui/types";

import GaugeIcon from "@/components/ui/gauge-icon";
import Cloud2Icon from "@/components/ui/cloud-2-icon";
import TriangleAlertIcon from "@/components/ui/triangle-alert-icon";
import FileDescriptionIcon from "@/components/ui/file-description-icon";
import MailFilledIcon from "@/components/ui/mail-filled-icon";
import PlugConnectedIcon from "@/components/ui/plug-connected-icon";
import GearIcon from "@/components/ui/gear-icon";
import RadioIcon from "@/components/ui/radio-icon";
import MagnifierIcon from "@/components/ui/magnifier-icon";
import FlameIcon from "@/components/ui/flame-icon";
import ClockIcon from "@/components/ui/clock-icon";
import HandHeartIcon from "@/components/ui/hand-heart-icon";
import TruckElectricIcon from "@/components/ui/truck-electric-icon";
import BrightnessDownIcon from "@/components/ui/brightness-down-icon";
import HeartIcon from "@/components/ui/heart-icon";
import UserCheckIcon from "@/components/ui/user-check-icon";
import GamepadIcon from "@/components/ui/gamepad-icon";
import GlobeIcon from "@/components/ui/globe-icon";
import CoffeeIcon from "@/components/ui/coffee-icon";
import RocketIcon from "@/components/ui/rocket-icon";
import MapPinIcon from "@/components/ui/map-pin-icon";
import AmbulanceIcon from "@/components/ui/ambulance-icon";
import CartIcon from "@/components/ui/cart-icon";
import PartyPopperIcon from "@/components/ui/party-popper-icon";
import HomeIcon from "@/components/ui/home-icon";
import WifiIcon from "@/components/ui/wifi-icon";
import SparklesIcon from "@/components/ui/sparkles-icon";
import TrashIcon from "@/components/ui/trash-icon";
import FocusIcon from "@/components/ui/focus-icon";
import BookIcon from "@/components/ui/book-icon";
import LocateIcon from "@/components/ui/locate-icon";
import TelephoneIcon from "@/components/ui/telephone-icon";
import LinkIcon from "@/components/ui/link-icon";

export type AnimatedIconComponent = ComponentType<
  AnimatedIconProps & RefAttributes<AnimatedIconHandle>
>;

const ICON_MAP: Record<string, AnimatedIconComponent> = {
  "⛽️": GaugeIcon,
  "🌧️": Cloud2Icon,
  "🚧": TriangleAlertIcon,
  "📰": FileDescriptionIcon,
  "✉️": MailFilledIcon,
  "⚡️": PlugConnectedIcon,
  "🌊": Cloud2Icon,
  "🛠️": GearIcon,
  "🎤": RadioIcon,
  "🔎": MagnifierIcon,
  "🚓": TriangleAlertIcon,
  "🍛": FlameIcon,
  "🗓️": ClockIcon,
  "🤝": HandHeartIcon,
  "🚕": TruckElectricIcon,
  "🌤️": BrightnessDownIcon,
  "🚌": TruckElectricIcon,
  "💍": HeartIcon,
  "📝": FileDescriptionIcon,
  "💼": UserCheckIcon,
  "🚨": TriangleAlertIcon,
  "🧩": GamepadIcon,
  "🗺️": GlobeIcon,
  "☕️": CoffeeIcon,
  "⛰️": RocketIcon,
  "🎁": HandHeartIcon,
  "🌍": GlobeIcon,
  "🧺": Cloud2Icon,
  "📞": TelephoneIcon,
  "📍": MapPinIcon,
  "🕒": ClockIcon,
  "🏥": AmbulanceIcon,
  "🛒": CartIcon,
  "🧭": GlobeIcon,
  "🎊": PartyPopperIcon,
  "🏢": HomeIcon,
  "🛜": WifiIcon,
  "📶": WifiIcon,
  "🏋️": SparklesIcon,
  "🚮": TrashIcon,
  "🛌": HomeIcon,
  "🎥": FocusIcon,
  "🥗": FlameIcon,
  "⚽️": SparklesIcon,
  "☕": CoffeeIcon,
  "📖": BookIcon,
  "🚂": TruckElectricIcon,
  "🚦": TriangleAlertIcon,
  "💊": AmbulanceIcon,
  "🏞️": GlobeIcon,
  "🚽": LocateIcon,
  "☮️": SparklesIcon,
  "🤞": SparklesIcon,
};

/** Returns the matching animated icon for an emoji, or LinkIcon as fallback. */
export function getAppIcon(emoji?: string): AnimatedIconComponent {
  if (!emoji) return LinkIcon;
  return ICON_MAP[emoji] ?? LinkIcon;
}
