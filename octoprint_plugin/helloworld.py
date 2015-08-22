# coding=utf-8
from __future__ import absolute_import

import octoprint.plugin

class HelloWorldPlugin(octoprint.plugin.StartupPlugin):
    def on_after_startup(self):
        self._logger.info("RepRasp UI Enabled")

__plugin_name__ = "RepRasp"
__plugin_version__ = "0.0.1"
__plugin_description__ = "A touch screen user interface plugin for OctoPrint"
__plugin_implementation__ = RepRaspPlugin()