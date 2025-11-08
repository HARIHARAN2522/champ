#!/bin/bash
# Linux Audit System Setup Script
# Run as root or with sudo

echo "=== Installing auditd ==="
sudo apt update -y
sudo apt install auditd audispd-plugins -y

echo "=== Starting and enabling auditd service ==="
sudo systemctl enable auditd
sudo systemctl start auditd

echo "=== Verifying auditd status ==="
sudo systemctl status auditd --no-pager

echo "=== Adding an audit rule to monitor /etc/passwd ==="
sudo auditctl -w /etc/passwd -p wa -k passwd_monitor

echo "=== Listing current audit rules ==="
sudo auditctl -l

echo "=== Simulating a change in /etc/passwd ==="
sudo echo "# test entry" >> /etc/passwd

echo "=== Searching audit logs for the key 'passwd_monitor' ==="
sudo ausearch -k passwd_monitor

echo "=== Done! Audit logs saved in /var/log/audit/audit.log ==="

