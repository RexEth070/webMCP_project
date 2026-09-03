import React from 'react';

interface UserAvatarProps {
  name: string;
}

export function UserAvatar({ name }: UserAvatarProps) {
  // Extract initials (up to 2 letters)
  const getInitials = (name: string) => {
    const words = name.trim().split(/\s+/);
    if (words.length === 0 || name === '') return '??';
    if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  const initials = getInitials(name);

  return (
    <div className="flex items-center gap-2">
      <div className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full border border-gray-200 bg-white after:absolute after:inset-0 after:rounded-full after:border after:border-black/10 hover:after:border-black/30 transition-colors cursor-pointer">
        <div className="flex h-full w-full items-center justify-center bg-gray-900 text-xs font-medium text-white">
          {initials}
        </div>
      </div>
    </div>
  );
}
