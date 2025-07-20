import React, { useState } from 'react';
import { DashboardLayout } from './components/DashboardLayout';
import { SmartOverviewPage } from './components/SmartOverviewPage';
import { WorkflowBuilderPage } from './components/WorkflowBuilderPage';
import { TaskStreamPage } from './components/TaskStreamPage';
import { TeamAnalyticsPage } from './components/TeamAnalyticsPage';
import { SettingsBillingPage } from './components/SettingsBillingPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('overview');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'overview':
        return <SmartOverviewPage />;
      case 'workflow':
        return <WorkflowBuilderPage />;
      case 'tasks':
        return <TaskStreamPage />;
      case 'analytics':
        return <TeamAnalyticsPage />;
      case 'settings':
        return <SettingsBillingPage />;
      default:
        return <SmartOverviewPage />;
    }
  };

  return (
    <div className="min-h-screen bg-background dark">
      <DashboardLayout currentPage={currentPage} onPageChange={setCurrentPage}>
        {renderCurrentPage()}
      </DashboardLayout>
    </div>
  );
}