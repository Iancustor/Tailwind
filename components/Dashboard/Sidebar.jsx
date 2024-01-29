import { FolderDown, History, Plus, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

function Sidebar() {
  const sidebarLinks = [
    {
      name: "Contacts",
      icon: Users,
      href: "/contacts",
    },
    {
      name: "Frequent",
      icon: History,
      href: "/frequent",
    },
    {
      name: "Other Contacts",
      icon: FolderDown,
      href: "/others",
    },
  ];
  return (
    <div className="px-8 py-4">
      <Link
        href="/contacts/new"
        className=" items-center gap-2 bg-blue-600 hover:bg-blue-400 text-white inline-flex py-3 px-6 rounded"
      >
        <Plus />
        <span>Contact</span>
      </Link>
      {/* All Other Links */}
      <div className="flex flex-col">
        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              key={i}
              className="flex gap-1 items-center py-2 px-0"
              href={item.href}
            >
              {/* <Users /> */}
              <Icon className="text-red-400" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
