import React from "react";

function DashboardLayout({
  children,
  notifications,
  revenue,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
}) {
  return (
    <main>
      <section className="section">
        <div className="container">
          {children}
          {notifications}
          {revenue}
        </div>
      </section>
    </main>
  );
}

export default DashboardLayout;
