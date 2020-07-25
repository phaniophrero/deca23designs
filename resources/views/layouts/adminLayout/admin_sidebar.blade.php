<?php $url = url()->current(); ?>
<!--sidebar-menu-->
<div id="sidebar"><a href="#" class="visible-phone"><i class="icon icon-home"></i> Dashboard</a>
        <ul>
                <li <?php if (preg_match("/dashboard/i", $url)){ ?> class="active" <?php } ?>><a
                                href="{{ url('/admin/dashboard') }}"><i class="icon icon-home"></i>
                                <span>Dashboard</span></a>
                </li>

                @if(Session::get('adminDetails')['users_full_access'] == 1)
                <?php $base_user_url = trim(basename($url)); ?>
                <li class="submenu"> <a href="#"><i class="icon icon-th-list"></i> <span>Users</span> <span
                                        class="label label-important">2</span></a>
                        <ul <?php if (preg_match("/users/i", $url)){ ?> style="display: block;" <?php } ?>>
                                <li <?php if ($base_user_url=="view-users"){ ?> class="active" <?php } ?>><a
                                                href="{{ url('/admin/view-users') }}">View Users</a></li>
                                <li <?php if ($base_user_url=="view-users-charts"){ ?> class="active" <?php } ?>><a
                                                href="{{ url('/admin/view-users-charts') }}">View Users Charts</a></li>
                                <li <?php if ($base_user_url=="view-users-countries-charts"){ ?> class="active"
                                        <?php } ?>><a href="{{ url('/admin/view-users-countries-charts') }}">View Users
                                                Countries Charts</a></li>
                        </ul>
                </li>
                @endif

                @if(Session::get('adminDetails')['type'] == "Admin")
                <?php $base_user_url = trim(basename($url)); ?>
                <li class="submenu"> <a href="#"><i class="icon icon-th-list"></i> <span>Admins / Sub-Admins</span>
                                <span class="label label-important">2</span></a>
                        <ul <?php if (preg_match("/admins/i", $url)){ ?> style="display: block;" <?php } ?>>
                                <li <?php if ($base_user_url=="add-admin"){ ?> class="active" <?php } ?>>
                                        <a href="{{ url('/admin/add-admin') }}">Add Admin / Sub-Admin</a>
                                </li>
                                <li <?php if ($base_user_url=="view-admins"){ ?> class="active" <?php } ?>>
                                        <a href="{{ url('/admin/view-admins') }}">View Admins / Sub-Admins</a>
                                </li>
                        </ul>
                </li>
                @endif

                @if(Session::get('adminDetails')['type']=="Admin")
                <li class="submenu"> <a href="#"><i class="icon icon-th-list"></i> <span>Newsletter Subscribers</span>
                                <span class="label label-important">1</span></a>
                        <ul <?php if (preg_match("/newsletter-subscribers/i", $url)){ ?> style="display: block;"
                                <?php } ?>>
                                <li <?php if (preg_match("/newsletter-subscribers/i", $url)){ ?> class="active"
                                        <?php } ?>><a href="{{ url('/admin/view-newsletter-subscribers') }}">
                                                Newsletters</a>
                                </li>
                        </ul>
                </li>
                @endif
        </ul>
</div>
<!--sidebar-menu-->