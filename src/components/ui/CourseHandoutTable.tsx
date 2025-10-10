"use client";

import React from "react";

export type HandoutRow = {
  sno: number | string;
  chapter: string;
  duration: number | string;
  theory: number | string;
  lab: number | string;
  outcomes: string;
};

type Props = {
  rows: HandoutRow[];
  className?: string;
  caption?: string;
};

// A reusable, attractive handout table with sticky header, zebra stripes, and hover states.
export default function CourseHandoutTable({ rows, className = "", caption }: Props) {
  return (
    <div className={`relative rounded-xl border border-gray-200 shadow-sm overflow-hidden ${className}`}>
      {/* subtle gradient top border */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500" />

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-800">
          {caption && (
            <caption className="text-left px-4 pt-4 pb-2 text-base font-semibold text-gray-900">
              {caption}
            </caption>
          )}
          <thead>
            <tr className="bg-gradient-to-r from-gray-50 to-white">
              {[
                "S. No.",
                "Chapter Name",
                "Duration (Hours)",
                "Theory (Hrs)",
                "Lab (Hrs)",
                "Learning Outcomes",
              ].map((col) => (
                <th
                  key={col}
                  className="sticky top-0 z-[1] px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className="odd:bg-white even:bg-gray-50/60 hover:bg-purple-50/60 transition-colors"
              >
                <td className="px-4 py-3 border-b border-gray-200 text-center font-medium text-gray-700">
                  {row.sno}
                </td>
                <td className="px-4 py-3 border-b border-gray-200">
                  <div className="font-medium text-gray-900">{row.chapter}</div>
                </td>
                <td className="px-4 py-3 border-b border-gray-200 text-center">{row.duration}</td>
                <td className="px-4 py-3 border-b border-gray-200 text-center">{row.theory}</td>
                <td className="px-4 py-3 border-b border-gray-200 text-center">{row.lab}</td>
                <td className="px-4 py-3 border-b border-gray-200 max-w-[480px]">
                  <p className="text-gray-700">{row.outcomes}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* soft bottom fade */}
      <div className="pointer-events-none h-6 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
