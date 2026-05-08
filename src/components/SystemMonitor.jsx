import { useEffect, useMemo, useState } from "react"
import WindowWrapper from "#components/doc/WindowWrapper"
import WindowControlls from "#components/WindowControlls"

import {
  Activity,
  Cpu,
  Database,
  HardDrive,
  Wifi,
  ShieldCheck,
  Terminal,
} from "lucide-react"

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
} from "recharts"

const initialProcesses = [
  {
    id: 1,
    name: "react-dev-server",
    cpu: 32,
    memory: "420MB",
    status: "Running",
  },
  {
    id: 2,
    name: "springboot-api",
    cpu: 24,
    memory: "620MB",
    status: "Running",
  },
  {
    id: 3,
    name: "mongodb-engine",
    cpu: 12,
    memory: "1.2GB",
    status: "Stable",
  },
  {
    id: 4,
    name: "leetcode-solver",
    cpu: 18,
    memory: "180MB",
    status: "Optimizing",
  },
  {
    id: 5,
    name: "portfolio-renderer",
    cpu: 27,
    memory: "300MB",
    status: "Running",
  },
]

const initialLogs = [
  "> Initializing RamOS...",
  "> Loading developer modules...",
  "> Connecting to GitHub...",
  "> Monitoring system health...",
  "> Elasticsearch synced successfully",
]

const chartSeed = [
  { time: "1", value: 24 },
  { time: "2", value: 31 },
  { time: "3", value: 28 },
  { time: "4", value: 42 },
  { time: "5", value: 38 },
  { time: "6", value: 48 },
  { time: "7", value: 41 },
]

const random = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const SystemMonitor = () => {
  const [cpu, setCpu] = useState(42)
  const [memory, setMemory] = useState(68)
  const [network, setNetwork] = useState(124)
  const [disk, setDisk] = useState(71)

  const [processes, setProcesses] = useState(initialProcesses)

  const [logs, setLogs] = useState(initialLogs)

  const [chartData, setChartData] = useState(chartSeed)

  useEffect(() => {
    const interval = setInterval(() => {
      setCpu(random(30, 85))
      setMemory(random(45, 90))
      setNetwork(random(80, 240))
      setDisk(random(50, 88))

      setProcesses((prev) =>
        prev.map((process) => ({
          ...process,
          cpu: random(5, 65),
        }))
      )

      setChartData((prev) => {
        const updated = [...prev.slice(1)]

        updated.push({
          time: `${Date.now()}`,
          value: random(20, 60),
        })

        return updated
      })

      const dynamicLogs = [
        "> API response stable",
        "> Docker container restarted",
        "> Optimizing database queries",
        "> Memory allocation successful",
        "> GitHub sync completed",
        "> Spring Boot running smoothly",
        "> React rendering optimized",
        "> Elasticsearch indexing complete",
      ]

      setLogs((prev) => {
        const updated = [...prev]

        updated.push(
          dynamicLogs[random(0, dynamicLogs.length - 1)]
        )

        return updated.slice(-6)
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  const uptime = useMemo(() => {
    return "2 Years 4 Months"
  }, [])

  return (
    <>
      <div id="window-header">
        <WindowControlls target="monitor" />

        <div className="monitor-title">
          <Activity size={15} />
          <h2>RamOS Activity Monitor</h2>
        </div>

        <div className="monitor-live">
          <span className="live-dot" />
          LIVE
        </div>
      </div>

      <div className="monitor-body">
        {/* Hero */}
        <section className="monitor-hero">
          <div>
            <p className="monitor-kicker">
              PERSONAL OPERATING SYSTEM
            </p>

            <h3>RamOS Developer Runtime</h3>

            <p className="monitor-description">
              Monitoring real-time coding activity,
              backend services, databases, deployments,
              and system health.
            </p>
          </div>

          <div className="hero-status">
            <span>System Status</span>
            <strong>Optimal</strong>
          </div>
        </section>

        {/* Metrics */}
        <section className="metrics-grid">
          <div className="metric-card">
            <div className="metric-top">
              <Cpu size={18} />
              <span>CPU Usage</span>
            </div>

            <strong>{cpu}%</strong>

            <div className="progress-bar">
              <span style={{ width: `${cpu}%` }} />
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-top">
              <Database size={18} />
              <span>Memory</span>
            </div>

            <strong>{memory}%</strong>

            <div className="progress-bar">
              <span style={{ width: `${memory}%` }} />
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-top">
              <Wifi size={18} />
              <span>Network</span>
            </div>

            <strong>{network} MB/s</strong>

            <div className="progress-bar">
              <span style={{ width: `${network / 3}%` }} />
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-top">
              <HardDrive size={18} />
              <span>Disk Usage</span>
            </div>

            <strong>{disk}%</strong>

            <div className="progress-bar">
              <span style={{ width: `${disk}%` }} />
            </div>
          </div>
        </section>

        {/* Graph */}
        <section className="monitor-section">
          <div className="section-head">
            <h3>System Performance</h3>

            <span>Realtime analytics</span>
          </div>

          <div className="chart-container">
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient
                    id="colorCpu"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="#22c55e"
                      stopOpacity={0.5}
                    />
                    <stop
                      offset="95%"
                      stopColor="#22c55e"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <XAxis
                  dataKey="time"
                  hide
                />

                <Tooltip
                  contentStyle={{
                    background: "#0f172a",
                    border: "1px solid #1e293b",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#22c55e"
                  fillOpacity={1}
                  fill="url(#colorCpu)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Processes */}
        <section className="monitor-section">
          <div className="section-head">
            <h3>Running Processes</h3>

            <span>{processes.length} active</span>
          </div>

          <div className="process-table">
            {processes.map((process) => (
              <div
                className="process-row"
                key={process.id}
              >
                <div className="process-name">
                  <ShieldCheck size={15} />
                  {process.name}
                </div>

                <div className="process-cpu">
                  {process.cpu}%
                </div>

                <div className="process-memory">
                  {process.memory}
                </div>

                <div className="process-status">
                  {process.status}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Terminal */}
        <section className="monitor-section">
          <div className="section-head">
            <h3>Live Logs</h3>

            <Terminal size={15} />
          </div>

          <div className="terminal-box">
            {logs.map((log, index) => (
              <p key={index}>{log}</p>
            ))}

            <span className="cursor">|</span>
          </div>
        </section>

        {/* Footer */}
        <section className="system-footer">
          <div className="footer-pill">
            🚀 Uptime: {uptime}
          </div>

          <div className="footer-pill online">
            <span className="status-dot" />
            System Stable
          </div>
        </section>
      </div>
    </>
  )
}

export default WindowWrapper(SystemMonitor, "monitor")