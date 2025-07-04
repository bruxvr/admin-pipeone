// Application Data
const appData = {
  masterAccount: {
    name: "BRPCHEFAI Master",
    totalSubAccounts: 12,
    totalUsers: 1847,
    activeChannels: 42,
    totalMessages: 125894,
    activeBulks: "5.094",
    openConversations: 234,
  },
  subAccounts: [
    {
      id: 1,
      name: "BAR DO GABRIEL",
      companyId: "BRPBARDOGABR",
      status: "active",
      createdAt: "2025-02-11T13:14:08.000000Z",
      lastActivity: "2025-07-04T15:30:00.000000Z",
      userCount: 45,
      channels: {
        whatsapp: { status: "active", messages: 1205 },
        instagram: { status: "active", messages: 890 },
        messenger: { status: "inactive", messages: 0 },
        telegram: { status: "active", messages: 234 },
        gmail: { status: "warning", messages: 45 },
      },
      activity: {
        openConversations: 23,
        bulkActions: 2,
        dailyMessages: { sent: 156, received: 189 },
      },
      internalUnits: [],
    },
    {
      id: 2,
      name: "CANTINA DO MARCIO",
      companyId: "BRPCANTINADOMARCIO",
      status: "inactive",
      createdAt: "2024-12-04T18:47:51.000000Z",
      lastActivity: "2025-01-15T10:20:00.000000Z",
      userCount: 12,
      channels: {
        whatsapp: { status: "inactive", messages: 0 },
        instagram: { status: "inactive", messages: 0 },
        messenger: { status: "inactive", messages: 0 },
        telegram: { status: "inactive", messages: 0 },
        gmail: { status: "inactive", messages: 0 },
      },
      activity: {
        openConversations: 0,
        bulkActions: 0,
        dailyMessages: { sent: 0, received: 0 },
      },
      internalUnits: [],
    },
    {
      id: 8,
      name: "CANTINA DO MARCIO",
      companyId: "BRPCANTINA",
      status: "active",
      createdAt: "2025-04-10T16:25:27.000000Z",
      lastActivity: "2025-07-04T18:15:00.000000Z",
      userCount: 123,
      channels: {
        whatsapp: { status: "active", messages: 4567 },
        instagram: { status: "active", messages: 3456 },
        messenger: { status: "active", messages: 2345 },
        telegram: { status: "active", messages: 1234 },
        gmail: { status: "active", messages: 567 },
      },
      activity: {
        openConversations: 67,
        bulkActions: 4,
        dailyMessages: { sent: 456, received: 534 },
      },
      internalUnits: [
        {
          id: "8-1",
          name: "Cantina Principal",
          userCount: 78,
          status: "active",
        },
        {
          id: "8-2",
          name: "Cantina - delivery",
          userCount: 45,
          status: "active",
        },
        {
          id: "8-3",
          name: "Cantina - Unidade Barra da Tijuca",
          userCount: 25,
          status: "active",
        },
        {
          id: "8-4",
          name: "Cantina - Unidade Ipanema",
          userCount: 20,
          status: "active",
        },
      ],
    },
    {
      id: 3,
      name: "RESTAURANTE DA BRUNA",
      companyId: "BRPRESTDAOBRUNA",
      status: "active",
      createdAt: "2025-01-31T11:55:15.000000Z",
      lastActivity: "2025-07-04T16:45:00.000000Z",
      userCount: 28,
      channels: {
        whatsapp: { status: "active", messages: 2340 },
        instagram: { status: "active", messages: 1789 },
        messenger: { status: "active", messages: 567 },
        telegram: { status: "inactive", messages: 0 },
        gmail: { status: "active", messages: 123 },
      },
      activity: {
        openConversations: 34,
        bulkActions: 1,
        dailyMessages: { sent: 234, received: 298 },
      },
      internalUnits: [
        {
          id: "3-1",
          name: "Unidade 1",
          userCount: 15,
          status: "active",
        },
        {
          id: "3-2",
          name: "Unidade 2",
          userCount: 13,
          status: "active",
        },
      ],
    },
    {
      id: 4,
      name: "ADVOCACIA SILVA & SANTOS",
      companyId: "BRPADVOCACIA",
      status: "active",
      createdAt: "2024-11-04T19:44:45.000000Z",
      lastActivity: "2025-07-04T14:20:00.000000Z",
      userCount: 67,
      channels: {
        whatsapp: { status: "active", messages: 3456 },
        instagram: { status: "warning", messages: 234 },
        messenger: { status: "active", messages: 1123 },
        telegram: { status: "active", messages: 890 },
        gmail: { status: "active", messages: 456 },
      },
      activity: {
        openConversations: 45,
        bulkActions: 3,
        dailyMessages: { sent: 378, received: 445 },
      },
      internalUnits: [],
    },
    {
      id: 5,
      name: "BOTECO DOS SONHOS",
      companyId: "BRPBOTECO",
      status: "active",
      createdAt: "2025-03-20T12:28:42.000000Z",
      lastActivity: "2025-07-04T17:10:00.000000Z",
      userCount: 35,
      channels: {
        whatsapp: { status: "active", messages: 1890 },
        instagram: { status: "active", messages: 1234 },
        messenger: { status: "inactive", messages: 0 },
        telegram: { status: "active", messages: 345 },
        gmail: { status: "warning", messages: 78 },
      },
      activity: {
        openConversations: 28,
        bulkActions: 1,
        dailyMessages: { sent: 189, received: 234 },
      },
      internalUnits: [],
    },
    {
      id: 6,
      name: "CASA DO PÃO FRANCÊS",
      companyId: "BRPCASADOPAO",
      status: "active",
      createdAt: "2025-04-23T12:02:00.000000Z",
      lastActivity: "2025-07-04T16:55:00.000000Z",
      userCount: 41,
      channels: {
        whatsapp: { status: "active", messages: 2678 },
        instagram: { status: "active", messages: 1567 },
        messenger: { status: "active", messages: 789 },
        telegram: { status: "inactive", messages: 0 },
        gmail: { status: "active", messages: 234 },
      },
      activity: {
        openConversations: 38,
        bulkActions: 2,
        dailyMessages: { sent: 267, received: 312 },
      },
      internalUnits: [],
    },
    {
      id: 7,
      name: "CLIENTE GRANDE",
      companyId: "BRPCLIENTEGRANDE",
      status: "warning",
      createdAt: "2024-12-30T18:51:52.000000Z",
      lastActivity: "2025-07-03T09:30:00.000000Z",
      userCount: 19,
      channels: {
        whatsapp: { status: "warning", messages: 456 },
        instagram: { status: "active", messages: 678 },
        messenger: { status: "inactive", messages: 0 },
        telegram: { status: "inactive", messages: 0 },
        gmail: { status: "warning", messages: 23 },
      },
      activity: {
        openConversations: 12,
        bulkActions: 0,
        dailyMessages: { sent: 45, received: 67 },
      },
      internalUnits: [],
    },

    {
      id: 9,
      name: "VINÍCOLA DOIS IRMÃOS",
      companyId: "BRPVINICOLAD",
      status: "inactive",
      createdAt: "2025-04-10T16:25:48.000000Z",
      lastActivity: "2025-06-15T12:00:00.000000Z",
      userCount: 8,
      channels: {
        whatsapp: { status: "inactive", messages: 0 },
        instagram: { status: "inactive", messages: 0 },
        messenger: { status: "inactive", messages: 0 },
        telegram: { status: "inactive", messages: 0 },
        gmail: { status: "inactive", messages: 0 },
      },
      activity: {
        openConversations: 0,
        bulkActions: 0,
        dailyMessages: { sent: 0, received: 0 },
      },
      internalUnits: [],
    },
  ],
};

// Global state
let currentView = "table";
let filteredData = [...appData.subAccounts];
let selectedSubAccounts = new Set();
let expandedRows = new Set();
let expandedTreeItems = new Set();

// Channel icons mapping
const channelIcons = {
  whatsapp: "fab fa-whatsapp",
  instagram: "fab fa-instagram",
  messenger: "fab fa-facebook-messenger",
  telegram: "fab fa-telegram",
  gmail: "fas fa-envelope",
};

// Status translations
const statusTranslations = {
  active: "Ativo",
  inactive: "Inativo",
  warning: "Atenção",
  error: "Erro",
};

// Utility functions
function formatNumber(num) {
  return num.toLocaleString("pt-BR");
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getRelativeTime(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now - date;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days === 0) return "Hoje";
  if (days === 1) return "Ontem";
  if (days < 7) return `${days} dias atrás`;
  if (days < 30) return `${Math.floor(days / 7)} semanas atrás`;
  return `${Math.floor(days / 30)} meses atrás`;
}

// Initialize the application
function init() {
  updateMetrics();
  setupEventListeners();
  applyFilters(); // Initialize with all data
}

// Update dashboard metrics
function updateMetrics() {
  document.getElementById("totalSubAccounts").textContent = formatNumber(
    appData.masterAccount.totalSubAccounts
  );
  document.getElementById("totalUsers").textContent = formatNumber(
    appData.masterAccount.totalUsers
  );
  document.getElementById("activeChannels").textContent = formatNumber(
    appData.masterAccount.activeChannels
  );
  document.getElementById("totalMessages").textContent = formatNumber(
    appData.masterAccount.totalMessages
  );
  document.getElementById("activeBulks").textContent = formatNumber(
    appData.masterAccount.activeBulks
  );
  document.getElementById("openConversations").textContent = formatNumber(
    appData.masterAccount.openConversations
  );
}

// Setup event listeners
function setupEventListeners() {
  // View mode buttons
  document.querySelectorAll(".view-mode-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const view = e.currentTarget.dataset.view;
      switchView(view);
    });
  });

  // Search input
  document.getElementById("searchInput").addEventListener("input", (e) => {
    applyFilters();
  });

  // Filter selects
  document
    .getElementById("statusFilter")
    .addEventListener("change", applyFilters);
  document
    .getElementById("channelFilter")
    .addEventListener("change", applyFilters);

  // Modal close
  document.getElementById("modal").addEventListener("click", (e) => {
    if (e.target.id === "modal") {
      closeModal();
    }
  });
}

// Switch between views
function switchView(view) {
  currentView = view;

  // Update button states
  document.querySelectorAll(".view-mode-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === view);
  });

  // Update view containers
  document.querySelectorAll(".view-container").forEach((container) => {
    container.classList.remove("active");
  });

  const targetView = document.getElementById(view + "View");
  if (targetView) {
    targetView.classList.add("active");
  }

  renderCurrentView();
}

// Apply filters
function applyFilters() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const statusFilter = document.getElementById("statusFilter").value;
  const channelFilter = document.getElementById("channelFilter").value;

  filteredData = appData.subAccounts.filter((account) => {
    // Search filter
    const matchesSearch =
      !searchTerm ||
      account.name.toLowerCase().includes(searchTerm) ||
      account.companyId.toLowerCase().includes(searchTerm);

    // Status filter
    const matchesStatus = !statusFilter || account.status === statusFilter;

    // Channel filter
    const matchesChannel =
      !channelFilter ||
      (account.channels[channelFilter] &&
        account.channels[channelFilter].status === "active");

    return matchesSearch && matchesStatus && matchesChannel;
  });

  renderCurrentView();
}

// Clear all filters
function clearFilters() {
  document.getElementById("searchInput").value = "";
  document.getElementById("statusFilter").value = "";
  document.getElementById("channelFilter").value = "";
  applyFilters();
}

// Render current view
function renderCurrentView() {
  switch (currentView) {
    case "table":
      renderTableView();
      break;
    case "cards":
      renderCardView();
      break;
    case "tree":
      renderTreeView();
      break;
  }
}

// Render table view
function renderTableView() {
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  filteredData.forEach((account) => {
    const row = createTableRow(account);
    tbody.appendChild(row);

    // Add sub-units if expanded
    if (expandedRows.has(account.id) && account.internalUnits.length > 0) {
      account.internalUnits.forEach((unit) => {
        const subRow = createSubUnitRow(unit);
        tbody.appendChild(subRow);
      });
    }
  });

  // Update select all checkbox
  updateSelectAllCheckbox();
}

// Create table row
function createTableRow(account) {
  const row = document.createElement("tr");
  row.dataset.id = account.id;

  if (expandedRows.has(account.id)) {
    row.classList.add("expanded");
  }

  const hasSubUnits = account.internalUnits.length > 0;
  const expandIcon = hasSubUnits
    ? `<i class="fas fa-chevron-${
        expandedRows.has(account.id) ? "down" : "right"
      }"></i>`
    : "";

  row.innerHTML = `
    <td>
      <input type="checkbox" ${
        selectedSubAccounts.has(account.id) ? "checked" : ""
      } 
             onchange="toggleSelection(${account.id})">
    </td>
    <td>
      <div style="display: flex; align-items: center; gap: 8px;">
        ${
          hasSubUnits
            ? `<button class="action-btn" onclick="toggleExpand(${account.id})" style="background: none; border: none; color: var(--color-text-secondary); cursor: pointer;">${expandIcon}</button>`
            : ""
        }
        <span>${account.name}</span>
      </div>
    </td>
    <td>${account.companyId}</td>
    <td>
      <span class="status-indicator ${account.status}">
        ${statusTranslations[account.status]}
      </span>
    </td>
    <td>${formatNumber(account.userCount)}</td>
    <td>
      <div class="channels-container">
        ${Object.entries(account.channels)
          .map(
            ([channel, data]) =>
              `<div class="channel-icon ${channel} ${data.status}" title="${
                channel.charAt(0).toUpperCase() + channel.slice(1)
              }: ${statusTranslations[data.status]}">
            <i class="${channelIcons[channel]}"></i>
          </div>`
          )
          .join("")}
      </div>
    </td>
    <td>
      <div class="activity-metrics">
        <div class="activity-item">
          <i class="fas fa-comment-dots"></i>
          <span>${account.activity.openConversations} conversas</span>
        </div>
        <div class="activity-item">
          <i class="fas fa-paper-plane"></i>
          <span>${account.activity.bulkActions} bulks</span>
        </div>
        <div class="activity-item">
          <i class="fas fa-exchange-alt"></i>
          <span>${
            account.activity.dailyMessages.sent +
            account.activity.dailyMessages.received
          } msgs</span>
        </div>
      </div>
    </td>
    <td title="${formatDate(account.lastActivity)}">
      ${getRelativeTime(account.lastActivity)}
    </td>
    <td>
      <div class="action-buttons">
        <button class="action-btn edit" onclick="editSubAccount(${
          account.id
        })" title="Editar">
          <i class="fas fa-edit"></i>
        </button>
        <button class="action-btn toggle" onclick="toggleSubAccount(${
          account.id
        })" title="Ativar/Desativar">
          <i class="fas fa-power-off"></i>
        </button>
        <button class="action-btn report" onclick="generateReport(${
          account.id
        })" title="Relatório">
          <i class="fas fa-chart-bar"></i>
        </button>
      </div>
    </td>
  `;

  return row;
}

// Create sub-unit row
function createSubUnitRow(unit) {
  const row = document.createElement("tr");
  row.classList.add("sub-row");

  row.innerHTML = `
    <td></td>
    <td>└ ${unit.name}</td>
    <td>-</td>
    <td>
      <span class="status-indicator ${unit.status}">
        ${statusTranslations[unit.status]}
      </span>
    </td>
    <td>${formatNumber(unit.userCount)}</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>
      <div class="action-buttons">
        <button class="action-btn edit" onclick="editSubUnit('${
          unit.id
        }')" title="Editar">
          <i class="fas fa-edit"></i>
        </button>
      </div>
    </td>
  `;

  return row;
}

// Render card view
function renderCardView() {
  const container = document.getElementById("cardsGrid");
  container.innerHTML = "";

  filteredData.forEach((account) => {
    const card = createSubAccountCard(account);
    container.appendChild(card);
  });
}

// Create sub-account card
function createSubAccountCard(account) {
  const card = document.createElement("div");
  card.className = "sub-account-card";
  card.dataset.id = account.id;

  if (account.internalUnits.length > 0) {
    card.classList.add("has-sub-units");
  }

  const activeChannels = Object.entries(account.channels).filter(
    ([_, data]) => data.status === "active"
  ).length;
  const totalMessages = Object.values(account.channels).reduce(
    (sum, data) => sum + data.messages,
    0
  );

  card.innerHTML = `
    ${
      account.internalUnits.length > 0
        ? `<div class="sub-units-indicator">${account.internalUnits.length} unidades</div>`
        : ""
    }
    
    <div class="card-header">
      <div>
        <div class="card-title">${account.name}</div>
        <div class="card-subtitle">${account.companyId}</div>
      </div>
      <div class="card-checkbox">
        <input type="checkbox" ${
          selectedSubAccounts.has(account.id) ? "checked" : ""
        } 
               onchange="toggleSelection(${account.id})">
      </div>
    </div>
    
    <div style="margin-bottom: 16px;">
      <span class="status-indicator ${account.status}">
        ${statusTranslations[account.status]}
      </span>
    </div>
    
    <div class="card-metrics">
      <div class="card-metric">
        <div class="card-metric-value">${formatNumber(account.userCount)}</div>
        <div class="card-metric-label">Usuários</div>
      </div>
      <div class="card-metric">
        <div class="card-metric-value">${activeChannels}</div>
        <div class="card-metric-label">Canais</div>
      </div>
      <div class="card-metric">
        <div class="card-metric-value">${formatNumber(totalMessages)}</div>
        <div class="card-metric-label">Mensagens</div>
      </div>
    </div>
    
    <div class="card-channels">
      <div class="card-channels-title">Canais Integrados</div>
      <div class="channels-container">
        ${Object.entries(account.channels)
          .map(
            ([channel, data]) =>
              `<div class="channel-icon ${channel} ${data.status}" title="${
                channel.charAt(0).toUpperCase() + channel.slice(1)
              }: ${statusTranslations[data.status]}">
            <i class="${channelIcons[channel]}"></i>
          </div>`
          )
          .join("")}
      </div>
    </div>
    
    <div class="card-activity">
      <div class="card-activity-title">Atividade</div>
      <div class="activity-metrics">
        <div class="activity-item">
          <i class="fas fa-comment-dots"></i>
          <span>${account.activity.openConversations} conversas abertas</span>
        </div>
        <div class="activity-item">
          <i class="fas fa-paper-plane"></i>
          <span>${account.activity.bulkActions} bulks ativos</span>
        </div>
        <div class="activity-item">
          <i class="fas fa-clock"></i>
          <span>Ativo ${getRelativeTime(account.lastActivity)}</span>
        </div>
      </div>
    </div>
    
    <div class="card-actions">
      <button class="btn btn--sm btn--primary" onclick="editSubAccount(${
        account.id
      })">
        <i class="fas fa-edit"></i>
        Editar
      </button>
      <button class="btn btn--sm btn--outline" onclick="toggleSubAccount(${
        account.id
      })">
        <i class="fas fa-power-off"></i>
        ${account.status === "active" ? "Desativar" : "Ativar"}
      </button>
      <button class="btn btn--sm btn--outline" onclick="generateReport(${
        account.id
      })">
        <i class="fas fa-chart-bar"></i>
        Relatório
      </button>
    </div>
  `;

  return card;
}

// Render tree view
function renderTreeView() {
  const container = document.getElementById("treeContainer");
  container.innerHTML = "";

  filteredData.forEach((account) => {
    const treeItem = createTreeItem(account);
    container.appendChild(treeItem);
  });
}

// Create tree item
function createTreeItem(account) {
  const item = document.createElement("div");
  item.className = "tree-item";
  item.dataset.id = account.id;

  const hasSubUnits = account.internalUnits.length > 0;
  const isExpanded = expandedTreeItems.has(account.id);

  item.innerHTML = `
    <div class="tree-item-header ${
      isExpanded ? "expanded" : ""
    }" onclick="toggleTreeItem(${account.id})">
      <div class="tree-expand-icon ${
        isExpanded ? "expanded" : ""
      }" style="cursor: pointer;">
        ${hasSubUnits ? '<i class="fas fa-chevron-right"></i>' : ""}
      </div>
      <div class="tree-item-content">
        <div class="tree-item-info">
          <div class="tree-item-name">${account.name}</div>
          <div class="tree-item-details">${account.companyId} • ${formatNumber(
    account.userCount
  )} usuários</div>
        </div>
        <div class="tree-item-metrics">
          <span class="status-indicator ${account.status}">
            ${statusTranslations[account.status]}
          </span>
          <div class="channels-container">
            ${Object.entries(account.channels)
              .filter(([_, data]) => data.status === "active")
              .map(
                ([channel, _]) =>
                  `<div class="channel-icon ${channel} active" title="${
                    channel.charAt(0).toUpperCase() + channel.slice(1)
                  }">
                <i class="${channelIcons[channel]}"></i>
              </div>`
              )
              .join("")}
          </div>
          <div class="action-buttons">
            <button class="action-btn edit" onclick="event.stopPropagation(); editSubAccount(${
              account.id
            })" title="Editar">
              <i class="fas fa-edit"></i>
            </button>
            <button class="action-btn report" onclick="event.stopPropagation(); generateReport(${
              account.id
            })" title="Relatório">
              <i class="fas fa-chart-bar"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    ${
      hasSubUnits
        ? `
      <div class="tree-sub-items ${isExpanded ? "expanded" : ""}">
        ${account.internalUnits
          .map(
            (unit) => `
          <div class="tree-sub-item">
            <div class="tree-sub-item-name">${unit.name}</div>
            <div class="tree-sub-item-details">${formatNumber(
              unit.userCount
            )} usuários • ${statusTranslations[unit.status]}</div>
          </div>
        `
          )
          .join("")}
      </div>
    `
        : ""
    }
  `;

  return item;
}

// Toggle functions
function toggleSelection(id) {
  if (selectedSubAccounts.has(id)) {
    selectedSubAccounts.delete(id);
  } else {
    selectedSubAccounts.add(id);
  }

  updateBulkActions();
  updateSelectAllCheckbox();
}

function toggleSelectAll() {
  const selectAll = document.getElementById("selectAll");

  if (selectAll.checked) {
    // Select all visible items
    filteredData.forEach((account) => {
      selectedSubAccounts.add(account.id);
    });
  } else {
    // Deselect all
    selectedSubAccounts.clear();
  }

  updateBulkActions();
  renderCurrentView();
}

function updateSelectAllCheckbox() {
  const selectAll = document.getElementById("selectAll");
  if (selectAll) {
    const visibleIds = filteredData.map((account) => account.id);
    const selectedVisibleCount = visibleIds.filter((id) =>
      selectedSubAccounts.has(id)
    ).length;

    selectAll.checked =
      visibleIds.length > 0 && selectedVisibleCount === visibleIds.length;
    selectAll.indeterminate =
      selectedVisibleCount > 0 && selectedVisibleCount < visibleIds.length;
  }
}

function toggleExpand(id) {
  if (expandedRows.has(id)) {
    expandedRows.delete(id);
  } else {
    expandedRows.add(id);
  }

  renderTableView();
}

function toggleTreeItem(id) {
  if (expandedTreeItems.has(id)) {
    expandedTreeItems.delete(id);
  } else {
    expandedTreeItems.add(id);
  }

  renderTreeView();
}

function updateBulkActions() {
  const bulkActions = document.getElementById("bulkActions");
  const selectedCount = document.getElementById("selectedCount");

  if (selectedSubAccounts.size > 0) {
    bulkActions.style.display = "flex";
    selectedCount.textContent = selectedSubAccounts.size;
  } else {
    bulkActions.style.display = "none";
  }
}

// Action functions
function editSubAccount(id) {
  const account = appData.subAccounts.find((a) => a.id === id);
  showModal(
    "Editar Subconta",
    `
    <div class="form-group">
      <label class="form-label">Nome da Subconta</label>
      <input type="text" class="form-control" value="${account.name}">
    </div>
    <div class="form-group">
      <label class="form-label">ID da Empresa</label>
      <input type="text" class="form-control" value="${account.companyId}">
    </div>
    <div class="form-group">
      <label class="form-label">Status</label>
      <select class="form-control">
        <option value="active" ${
          account.status === "active" ? "selected" : ""
        }>Ativo</option>
        <option value="inactive" ${
          account.status === "inactive" ? "selected" : ""
        }>Inativo</option>
        <option value="warning" ${
          account.status === "warning" ? "selected" : ""
        }>Atenção</option>
      </select>
    </div>
    <div class="form-group">
      <button class="btn btn--primary" onclick="saveSubAccount(${id})">Salvar</button>
      <button class="btn btn--outline" onclick="closeModal()">Cancelar</button>
    </div>
  `
  );
}

function editSubUnit(id) {
  showModal(
    "Editar Unidade Interna",
    `
    <div class="form-group">
      <label class="form-label">Nome da Unidade</label>
      <input type="text" class="form-control" value="Unidade ${id}">
    </div>
    <div class="form-group">
      <label class="form-label">Número de Usuários</label>
      <input type="number" class="form-control" value="10">
    </div>
    <div class="form-group">
      <button class="btn btn--primary" onclick="saveSubUnit('${id}')">Salvar</button>
      <button class="btn btn--outline" onclick="closeModal()">Cancelar</button>
    </div>
  `
  );
}

function toggleSubAccount(id) {
  const account = appData.subAccounts.find((a) => a.id === id);
  const newStatus = account.status === "active" ? "inactive" : "active";
  account.status = newStatus;

  showModal(
    "Status Alterado",
    `
    <p>A subconta "${account.name}" foi ${
      newStatus === "active" ? "ativada" : "desativada"
    } com sucesso.</p>
    <button class="btn btn--primary" onclick="closeModal()">OK</button>
  `
  );

  setTimeout(() => {
    renderCurrentView();
  }, 100);
}

function generateReport(id) {
  const account = appData.subAccounts.find((a) => a.id === id);
  showModal(
    "Relatório Gerado",
    `
    <p>Relatório da subconta "${account.name}" foi gerado com sucesso.</p>
    <p>O arquivo será enviado para seu email em alguns minutos.</p>
    <button class="btn btn--primary" onclick="closeModal()">OK</button>
  `
  );
}

function bulkAction(action) {
  const count = selectedSubAccounts.size;
  let message = "";

  switch (action) {
    case "activate":
      message = `${count} subconta(s) foram ativadas com sucesso.`;
      break;
    case "deactivate":
      message = `${count} subconta(s) foram desativadas com sucesso.`;
      break;
    case "export":
      message = `Relatório de ${count} subconta(s) foi gerado com sucesso.`;
      break;
  }

  showModal(
    "Ação Executada",
    `
    <p>${message}</p>
    <button class="btn btn--primary" onclick="closeModal()">OK</button>
  `
  );

  selectedSubAccounts.clear();
  updateBulkActions();
  renderCurrentView();
}

function createSubAccount() {
  showModal(
    "Nova Subconta",
    `
    <div class="form-group">
      <label class="form-label">Nome da Subconta</label>
      <input type="text" class="form-control" placeholder="Digite o nome da subconta">
    </div>
    <div class="form-group">
      <label class="form-label">ID da Empresa</label>
      <input type="text" class="form-control" placeholder="Digite o ID da empresa">
    </div>
    <div class="form-group">
      <label class="form-label">Número de Usuários</label>
      <input type="number" class="form-control" placeholder="0">
    </div>
    <div class="form-group">
      <button class="btn btn--primary" onclick="saveNewSubAccount()">Criar Subconta</button>
      <button class="btn btn--outline" onclick="closeModal()">Cancelar</button>
    </div>
  `
  );
}

function exportReport() {
  showModal(
    "Exportar Relatório",
    `
    <p>Relatório completo da conta master será gerado com todos os dados das subcontas.</p>
    <div class="form-group">
      <label class="form-label">Formato</label>
      <select class="form-control">
        <option value="pdf">PDF</option>
        <option value="excel">Excel</option>
        <option value="csv">CSV</option>
      </select>
    </div>
    <div class="form-group">
      <button class="btn btn--primary" onclick="confirmExport()">Exportar</button>
      <button class="btn btn--outline" onclick="closeModal()">Cancelar</button>
    </div>
  `
  );
}

function confirmExport() {
  showModal(
    "Relatório Exportado",
    `
    <p>Relatório foi gerado com sucesso e será enviado para seu email.</p>
    <button class="btn btn--primary" onclick="closeModal()">OK</button>
  `
  );
}

function saveSubAccount(id) {
  showModal(
    "Subconta Salva",
    `
    <p>As alterações foram salvas com sucesso.</p>
    <button class="btn btn--primary" onclick="closeModal()">OK</button>
  `
  );
}

function saveSubUnit(id) {
  showModal(
    "Unidade Salva",
    `
    <p>As alterações na unidade interna foram salvas com sucesso.</p>
    <button class="btn btn--primary" onclick="closeModal()">OK</button>
  `
  );
}

function saveNewSubAccount() {
  showModal(
    "Subconta Criada",
    `
    <p>Nova subconta foi criada com sucesso.</p>
    <button class="btn btn--primary" onclick="closeModal()">OK</button>
  `
  );
}

// Modal functions
function showModal(title, content) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalBody").innerHTML = content;
  document.getElementById("modal").classList.add("active");
}

function closeModal() {
  document.getElementById("modal").classList.remove("active");
}

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", init);
