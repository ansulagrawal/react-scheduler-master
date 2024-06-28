import { ViewType, SummaryPos } from "./default";

export default {
  schedulerWidth: "97%",
  besidesWidth: 10,
  schedulerMaxHeight: 0,
  tableHeaderHeight: 40,
  schedulerContentHeight: "800px",

  responsiveByParent: false,

  agendaResourceTableWidth: 90,
  agendaMaxEventWidth: 100,

  dayResourceTableWidth: 90,
  weekResourceTableWidth: "2%",
  monthResourceTableWidth: 90,
  quarterResourceTableWidth: 90,
  yearResourceTableWidth: 90,
  customResourceTableWidth: 90,

  dayCellWidth: 20,
  weekCellWidth: "8%",
  monthCellWidth: 80,
  quarterCellWidth: 80,
  yearCellWidth: 80,
  customCellWidth: 80,

  dayMaxEvents: 99,
  weekMaxEvents: 99,
  monthMaxEvents: 99,
  quarterMaxEvents: 99,
  yearMaxEvents: 99,
  customMaxEvents: 99,

  eventItemPopoverTrigger: "hover",
  eventItemPopoverPlacement: "bottomLeft",
  eventItemPopoverWidth: 300,

  eventItemHeight: 20,
  eventItemLineHeight: 4,
  nonAgendaSlotMinHeight: 0,
  dayStartFrom: 7,
  dayStopTo: 22,
  defaultEventBgColor: "#80C5F6",
  selectedAreaColor: "#7EC2F3",
  nonWorkingTimeHeadColor: "#999999",
  nonWorkingTimeHeadBgColor: "#fff0f6",
  nonWorkingTimeBodyBgColor: "#fff0f6",
  summaryColor: "#666",
  summaryPos: SummaryPos.TopRight,
  groupOnlySlotColor: "#F8F8F8",

  startResizable: false,
  endResizable: false,
  movable: true,
  creatable: true,
  crossResourceMove: true,
  checkConflict: false,
  scrollToSpecialDayjsEnabled: true,
  eventItemPopoverEnabled: true,
  eventItemPopoverShowColor: true,
  calendarPopoverEnabled: true,
  recurringEventsEnabled: true,
  viewChangeSpinEnabled: true,
  dateChangeSpinEnabled: true,
  headerEnabled: true,
  resourceViewEnabled: true,
  displayWeekend: true,
  relativeMove: true,
  defaultExpanded: true,
  dragAndDropEnabled: true,

  schedulerHeaderEventsFuncsTimeoutMs: 100,

  resourceName: "Estilistas",
  taskName: "Task Name",
  agendaViewHeader: "Agenda",
  addMorePopoverHeaderFormat: "MMM D, YYYY dddd",
  eventItemPopoverDateFormat: "MMM D",
  nonAgendaDayCellHeaderFormat: "ha",
  nonAgendaWeekCellHeaderFormat: "ww/YYYY",
  nonAgendaMonthCellHeaderFormat: "MMM YYYY",
  nonAgendaYearCellHeaderFormat: "YYYY",
  nonAgendaOtherCellHeaderFormat: "ddd M/D",

  minuteStep: 15,

  views: [
    { viewName: "Day", viewType: ViewType.Day, showAgenda: false, isEventPerspective: true },
    // { viewName: "Week", viewType: ViewType.Week, showAgenda: false, isEventPerspective: false },
    // { viewName: "Month", viewType: ViewType.Month, showAgenda: false, isEventPerspective: false },
    // { viewName: "Quarter", viewType: ViewType.Quarter, showAgenda: false, isEventPerspective: false },
    // { viewName: "Year", viewType: ViewType.Year, showAgenda: false, isEventPerspective: false },
  ],
};
