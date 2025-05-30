import TaskAltTwoToneIcon from "@mui/icons-material/TaskAltTwoTone";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import PendingTwoToneIcon from "@mui/icons-material/PendingTwoTone";
import ErrorTwoToneIcon from "@mui/icons-material/ErrorTwoTone";
import ReportProblemTwoToneIcon from "@mui/icons-material/ReportProblemTwoTone";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import SkipNextTwoToneIcon from "@mui/icons-material/SkipNextTwoTone";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Tooltip } from "@mui/material";
import { TaskStatus, WorkflowStatus } from "../../types";
import React from "react";

export function getTaskStatusIcon(status: TaskStatus, size: number = 25) {
  const TaskStatusIconMap: { [key in TaskStatus]: React.JSX.Element } = {
    PENDING: (
      <Tooltip title="Pending">
        <PendingTwoToneIcon color="warning" sx={{ fontSize: size }} />
      </Tooltip>
    ),
    RUNNING: (
      <Tooltip title="Running">
        <HourglassBottomIcon color="info" sx={{ fontSize: size }} />
      </Tooltip>
    ),
    SUCCEEDED: (
      <Tooltip title="Succeeded">
        <TaskAltTwoToneIcon color="success" sx={{ fontSize: size }} />
      </Tooltip>
    ),
    SKIPPED: (
      <Tooltip title="Skipped">
        <SkipNextTwoToneIcon color="warning" sx={{ fontSize: size }} />
      </Tooltip>
    ),
    FAILED: (
      <Tooltip title="Failed">
        <CancelTwoToneIcon color="error" sx={{ fontSize: size }} />
      </Tooltip>
    ),
    ERROR: (
      <Tooltip title="Error">
        <ErrorTwoToneIcon color="error" sx={{ fontSize: size }} />
      </Tooltip>
    ),
    OMITTED: (
      <Tooltip title="Omitted">
        <ReportProblemTwoToneIcon color="warning" sx={{ fontSize: size }} />
      </Tooltip>
    ),
  };

  return TaskStatusIconMap[status];
}

export function getWorkflowStatusIcon(
  status: WorkflowStatus,
  size: number = 25
) {
  const workflowStatusIconMap: { [key in WorkflowStatus]: React.JSX.Element } =
    {
      Unknown: (
        <Tooltip title="Unknown">
          <QuestionMarkIcon color="warning" sx={{ fontSize: size }} />
        </Tooltip>
      ),
      WorkflowPendingStatus: (
        <Tooltip title="Pending">
          <PendingTwoToneIcon color="warning" sx={{ fontSize: size }} />
        </Tooltip>
      ),
      WorkflowRunningStatus: (
        <Tooltip title="Running">
          <HourglassBottomIcon color="info" sx={{ fontSize: size }} />
        </Tooltip>
      ),
      WorkflowSucceededStatus: (
        <Tooltip title="Succeeded">
          <TaskAltTwoToneIcon color="success" sx={{ fontSize: size }} />
        </Tooltip>
      ),
      WorkflowFailedStatus: (
        <Tooltip title="Failed">
          <CancelTwoToneIcon color="error" sx={{ fontSize: size }} />
        </Tooltip>
      ),
      WorkflowErroredStatus: (
        <Tooltip title="Errored">
          <ReportProblemTwoToneIcon color="error" sx={{ fontSize: size }} />
        </Tooltip>
      ),
    };

  return workflowStatusIconMap[status];
}
