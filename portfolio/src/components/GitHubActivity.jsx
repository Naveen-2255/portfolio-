import React, { useState, useEffect, useCallback } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { ExternalLink } from 'lucide-react';
import OSWindow from './OSWindow';

export default function GitHubActivity() {
  const oliveTheme = {
    light: ['#f8f5f2', '#d5e0cc', '#94ad83', '#5e754d', '#3f4d34'],
    dark: ['#f8f5f2', '#d5e0cc', '#94ad83', '#5e754d', '#3f4d34'],
  };

  const [stats, setStats] = useState([
    { label: 'Total Contributions', value: '...' },
    { label: 'Current Streak', value: '...' },
    { label: 'Repositories', value: '...' },
  ]);
  const [monthsToShow, setMonthsToShow] = useState(4);

  // Responsive months view: 2 months for mobile (< 768px), 4 months for desktop
  useEffect(() => {
    const handleResize = () => {
      setMonthsToShow(window.innerWidth < 768 ? 2 : 4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch real live GitHub user profile & contribution stats
  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const [userRes, contribRes] = await Promise.all([
          fetch('https://api.github.com/users/Naveen-2255'),
          fetch('https://github-contributions-api.jogruber.de/v4/Naveen-2255'),
        ]);

        const userData = await userRes.json();
        const contribData = await contribRes.json();

        const reposCount = userData.public_repos ?? 5;
        let totalContribs = 0;
        let streakCount = 0;

        if (contribData && contribData.contributions) {
          const list = contribData.contributions;
          totalContribs = list.reduce((acc, item) => acc + item.count, 0);

          // Calculate current active streak backwards
          const reversed = [...list].reverse();
          let startIndex = 0;
          if (reversed[0] && reversed[0].count === 0 && reversed[1] && reversed[1].count > 0) {
            startIndex = 1;
          }

          for (let i = startIndex; i < reversed.length; i++) {
            if (reversed[i].count > 0) {
              streakCount++;
            } else {
              break;
            }
          }
        }

        setStats([
          { label: 'Total Contributions', value: totalContribs.toString() },
          { label: 'Current Streak', value: `${streakCount} ${streakCount === 1 ? 'day' : 'days'}` },
          { label: 'Repositories', value: reposCount.toString() },
        ]);
      } catch (error) {
        console.error('Failed to load live GitHub stats:', error);
        setStats([
          { label: 'Total Contributions', value: '137' },
          { label: 'Current Streak', value: '1 day' },
          { label: 'Repositories', value: '5' },
        ]);
      }
    }

    fetchGitHubData();
  }, []);

  // Filter calendar data to show only last N months
  const transformData = useCallback((contributions) => {
    if (!contributions || contributions.length === 0) return [];
    
    // Find cutoff date based on latest contribution entry date
    const latestDate = new Date(contributions[contributions.length - 1].date);
    const cutoffDate = new Date(latestDate);
    cutoffDate.setMonth(cutoffDate.getMonth() - monthsToShow);

    return contributions.filter((activity) => new Date(activity.date) >= cutoffDate);
  }, [monthsToShow]);

  return (
    <section id="github" className="scroll-mt-6">
      <OSWindow 
        path="C:\> github.exe" 
        bodyClassName="p-6 md:p-10"
      >
        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-black mb-8">
          GITHUB ACTIVITY
        </h2>

        {/* Stats Grid with Live Fetched Data */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="border-2 border-black hard-shadow bg-white p-4 text-center font-mono"
            >
              <p className="text-xs text-slate-600 mb-1 font-semibold uppercase">{stat.label}</p>
              <p className="text-3xl font-extrabold text-black font-sans">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Calendar Section with 2 Months (Mobile) / 4 Months (Desktop) */}
        <div className="border-2 border-black hard-shadow bg-white p-4 sm:p-6 flex flex-col items-center justify-center">
          <div className="w-full flex justify-center py-2 font-mono overflow-x-auto">
            <GitHubCalendar 
              username="Naveen-2255"
              transformData={transformData}
              theme={oliveTheme}
              blockSize={12}
              blockMargin={4}
              fontSize={12}
            />
          </div>
          <p className="text-[11px] font-mono text-slate-500 mt-2 text-center">
            Showing activity for the past {monthsToShow} months ({monthsToShow === 2 ? 'Mobile View' : 'Desktop View'})
          </p>
        </div>

        <div className="mt-8 flex justify-between items-center pt-4 border-t-2 border-black">
          <a 
            href="https://github.com/Naveen-2255"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#3f4d34] text-white border-2 border-black hard-shadow px-4 py-2 font-mono text-xs font-bold hover:bg-[#2e3927] transition-all"
          >
            &gt; view github profile <ExternalLink size={12} />
          </a>

          <div className="bg-[#3f4d34] text-yellow-300 font-mono text-xs px-2.5 py-1 border border-black hard-shadow-sm font-bold">
            C:\&gt;
          </div>
        </div>
      </OSWindow>
    </section>
  );
}

