<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\NewsletterSubscriber;
use App\Exports\subscribersExport;
use Maatwebsite\Excel\Facades\Excel;

class NewsletterController extends Controller
{
    public function checkSubscriber(Request $request)
    {
        if($request->ajax()) {
            $data = $request->all();
            // echo "<pre>"; print_r($data); die;
            $subscriberCount = NewsletterSubscriber::where('email', $data['subscriber_email'])->count();
            if($subscriberCount > 0) {
                echo "exists";
            }
        }
    }

    public function addSubscriber(Request $request)
    {
        if($request->ajax()) {
            $data = $request->all();
            // echo "<pre>"; print_r($data); die;
            $subscriberCount = NewsletterSubscriber::where('email', $data['subscriber_email'])->count();
            if($subscriberCount > 0) {
                echo "exists";
            } else {
                // Add Newsletter Subscriber in newsletter_subscribes table
                $newsletter = new NewsletterSubscriber;
                $newsletter->email = $data['subscriber_email'];
                $newsletter->status = 1;
                $newsletter->save();
                echo "saved";
            }
        }
    }

    public function viewNewsletterSubscribers()
    {
        $newsletters = NewsletterSubscriber::get();
        return view('admin.newsletters.view_newsletters', compact('newsletters'));
    }

    public function updateNewsletterStatus($id, $status)
    {
        NewsletterSubscriber::where('id',$id)->update(['status'=> $status]);
        return redirect()->back()->with('flash_message_success', 'Newsletter Status has been updated!');
    }

    public function deleteNewsletterEmail($id)
    {
        NewsletterSubscriber::where('id', $id)->delete();
        return redirect()->back()->with('flash_message_success', 'Newsletter Email has been deleted!');
    }

    public function exportNewsletterEmails()
    {
        return Excel::download(new subscribersExport, 'subscribers.xlsx');
    }
}
